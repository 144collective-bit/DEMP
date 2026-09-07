"""
Knock the black background off the Degen Emporium crew art.

Why not a plain color key: the artwork is FULL of genuine black -- the suit,
the dog's fur, the punk's shirt, and every outline in the piece. Keying all
black globally would punch holes straight through the characters.

Instead: find the black regions that are CONNECTED TO THE IMAGE BORDER and
remove only those. Interior blacks are untouched because they never touch
the edge.

Anti-aliased edge pixels (art blending into the black ground) get partial
alpha via a luminance ramp, so there's no hard jaggy cutout line.
"""

import sys, os
import numpy as np
from PIL import Image
from scipy import ndimage

SRC = sys.argv[1] if len(sys.argv) > 1 else r"C:\Users\mikem\Desktop\DegenEmporium\hero-crew.png"
OUT = os.path.splitext(SRC)[0] + "-cutout.png"

# A pixel counts as "background dark" below this on every channel.
DARK = 46
# Luminance ramp for anti-aliased edges: lo -> fully transparent, hi -> opaque.
RAMP_LO, RAMP_HI = 8, 58

im = Image.open(SRC).convert("RGB")
a = np.asarray(im).astype(np.int16)
h, w = a.shape[:2]
print(f"source      {w}x{h}")

dark = (a[:, :, 0] < DARK) & (a[:, :, 1] < DARK) & (a[:, :, 2] < DARK)

# Connected components of the dark mask; keep only those touching the border.
lab, n = ndimage.label(dark)
border = np.concatenate([lab[0, :], lab[-1, :], lab[:, 0], lab[:, -1]])
bg_labels = np.unique(border)
bg_labels = bg_labels[bg_labels != 0]
bg = np.isin(lab, bg_labels)
print(f"components  {n} dark regions, {len(bg_labels)} touch the border")
print(f"background  {100.0 * bg.sum() / bg.size:.1f}% of the image")

# Soft alpha inside the background region only.
lum = a.max(axis=2).astype(np.float32)
soft = np.clip((lum - RAMP_LO) / float(RAMP_HI - RAMP_LO), 0.0, 1.0)
alpha = np.where(bg, soft * 255.0, 255.0).astype(np.uint8)

rgba = np.dstack([np.asarray(im).astype(np.uint8), alpha])
out = Image.fromarray(rgba, "RGBA")

# Trim fully-transparent margins so the art fills its box.
bbox = out.getbbox()
if bbox:
    out = out.crop(bbox)
    print(f"trimmed to  {out.size[0]}x{out.size[1]}  (bbox {bbox})")

out.save(OUT, optimize=True)
print(f"wrote       {OUT}  {os.path.getsize(OUT) // 1024} KB")
