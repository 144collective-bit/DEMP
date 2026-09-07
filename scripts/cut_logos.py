"""Cut the PulseChain project logos out of their black backgrounds.

Same border-connected removal used everywhere else in this project: only
black that touches the crop edge goes. These marks contain real black --
the ProveX shield X, the HEX hexagon outlines, the PulseChain EKG line --
and a plain colour key would erase all of it.

Sources are JPEG, so the black ground is noisy rather than pure; the
threshold is a little higher than for the PNG art and the alpha ramp is
wider to hide compression fringing.
"""
import os
import numpy as np
from PIL import Image
from scipy import ndimage

SRC = r"C:\Users\mikem\Desktop\DegenEmporium"
OUT = r"C:\Users\mikem\Desktop\DegenEmporium\DegenEmporium.com\src\assets\links"
os.makedirs(OUT, exist_ok=True)

# One consistent family: script/drip lettering, single line, with its mark.
# Several variants of each existed; these were picked for a matching set.
JOBS = [
    ("6JMV6.jpg",                "hex-com"),
    ("VUITN.jpg",                "pulsechain-com"),
    ("PPi5g.jpg",                "pulsex-com"),
    ("qV3xF.jpg",                "provex-com"),
    ("kmZbV.jpg",                "hex-mark"),
    ("BDHFs.jpg",                "pulse-mark"),
    ("ProveX Logo Drippy.jpg",   "provex-mark"),
]

DARK = 58        # JPEG black is not 0,0,0
RAMP_LO, RAMP_HI = 10, 78

for fn, slug in JOBS:
    p = os.path.join(SRC, fn)
    if not os.path.exists(p):
        print(f"  MISSING {fn}")
        continue
    im = Image.open(p).convert("RGB")
    a = np.asarray(im).astype(np.int16)

    dark = (a[:, :, 0] < DARK) & (a[:, :, 1] < DARK) & (a[:, :, 2] < DARK)
    lab, n = ndimage.label(dark)
    edge = np.concatenate([lab[0, :], lab[-1, :], lab[:, 0], lab[:, -1]])
    bgl = np.unique(edge)
    bgl = bgl[bgl != 0]
    bg = np.isin(lab, bgl)

    lum = a.max(axis=2).astype(np.float32)
    soft = np.clip((lum - RAMP_LO) / float(RAMP_HI - RAMP_LO), 0, 1)
    alpha = np.where(bg, soft * 255.0, 255.0).astype(np.uint8)

    out = Image.fromarray(
        np.dstack([np.asarray(im).astype(np.uint8), alpha]), "RGBA")
    bbox = out.getbbox()
    if bbox:
        out = out.crop(bbox)

    # Astro never generates above 700px wide for these rows, so anything
    # past ~800 is bytes no browser receives. Marks are currently unused.
    cap = 640 if slug.endswith("-mark") else 800
    if out.size[0] > cap:
        r = cap / out.size[0]
        out = out.resize((cap, max(1, round(out.size[1] * r))), Image.LANCZOS)

    # WebP, not PNG: these are gradient-heavy stickers that PNG stores
    # badly (5x larger), and the sources are lossy JPEG anyway, so there
    # is no lossless original being degraded.
    dst = os.path.join(OUT, slug + ".webp")
    out.save(dst, "WEBP", quality=90, method=6)
    t = 100.0 * (np.asarray(out)[:, :, 3] < 8).sum() / (out.size[0] * out.size[1])
    print(f"  {slug:16s} {out.size[0]:5d}x{out.size[1]:<5d} {os.path.getsize(dst)//1024:5d} KB  {t:4.1f}% transparent")

# contact sheet on black to eyeball the cutouts
cells = [Image.open(os.path.join(OUT, s + ".webp")).convert("RGBA") for _, s in JOBS
         if os.path.exists(os.path.join(OUT, s + ".webp"))]
W = 620
scaled = []
for c in cells:
    h = max(1, round(W * c.size[1] / c.size[0]))
    if h > 220:
        h = 220
        w = round(h * c.size[0] / c.size[1])
    else:
        w = W
    scaled.append(c.resize((w, h), Image.LANCZOS))
sheet = Image.new("RGBA", (W + 24, sum(s.size[1] for s in scaled) + 14 * len(scaled) + 14), (10, 9, 12, 255))
y = 12
for s in scaled:
    sheet.alpha_composite(s, (12, y))
    y += s.size[1] + 14
sheet.convert("RGB").save(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "_logos.jpg"), quality=88)
print("\ncontact sheet: _logos.jpg")
