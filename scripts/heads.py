"""Cut the 5 team heads out of the crew lineup into square profile pictures.

Connected components DON'T work here: every figure wears black jeans that fall
below any background threshold, so each body fragments into pieces. But this is
a horizontal lineup separated by black gaps, so a column projection splits it
cleanly -- collapse the mask down to one row and look for the gaps.

Head framing is derived, not hand-tuned: horizontal centre comes from the mask
in the TOP band of each figure, so a pose that throws the body box off (the
pink one is pointing) still centres on the head.
"""
import os, sys
import numpy as np
from PIL import Image
from scipy import ndimage

SRC = sys.argv[1] if len(sys.argv) > 1 else r"C:\Users\mikem\Desktop\DegenEmporium\dHzyp.jpg"
OUT = r"C:\Users\mikem\Desktop\DegenEmporium\DegenEmporium.com\src\assets\team"
os.makedirs(OUT, exist_ok=True)

SLUGS = ["blue-balaclava", "gold-mask", "the-suit", "purple-third-eye", "pink-balaclava"]

FIG_T = 30
BAND = 0.24
SIZE = 900

im = Image.open(SRC).convert("RGB")
a = np.asarray(im)
H, W = a.shape[:2]
print("source", im.size)

mask = a.max(axis=2) > FIG_T

# --- locate heads --------------------------------------------------------
# A full-height column projection fails: the figures touch, and two of the
# four boundaries have no low-density column at all. But the HEADS are well
# separated, so project only the top band of the lineup.
rows = np.where(mask.any(axis=1))[0]
gy0, gy1 = rows.min(), rows.max() + 1
gh = gy1 - gy0

band = mask[gy0:gy0 + int(gh * 0.18), :]
lab, n = ndimage.label(band.sum(axis=0) > 2)
spans = []
for i in range(1, n + 1):
    xs = np.where(lab == i)[0]
    if len(xs) > W * 0.02:
        spans.append((int(xs.min()), int(xs.max() + 1)))
spans.sort()
print(f"heads detected: {len(spans)}")
for s_ in spans:
    print(f"   x {s_[0]:5d} - {s_[1]:5d}   width {s_[1]-s_[0]:4d}")
if len(spans) != 5:
    raise SystemExit("expected 5 heads")

cells = []
for idx, (x0, x1) in enumerate(spans):
    cx = (x0 + x1) / 2.0
    head_w = x1 - x0
    colmask = mask[:, x0:x1]
    r = np.where(colmask.any(axis=1))[0]
    ytop = r.min()

    S = head_w * 1.62
    top = int(round(ytop - S * 0.11))
    left = int(round(cx - S / 2))
    box = (left, top, left + int(round(S)), top + int(round(S)))

    crop = im.crop(box).convert("RGBA")   # crop() pads out-of-bounds with black
    rgb = np.asarray(crop)[:, :, :3].astype(np.int16)

    # Remove only background black: black connected to the crop edge. The
    # suit's face is solid black and survives because the figure's white
    # outline encloses it.
    dark = (rgb[:, :, 0] < 46) & (rgb[:, :, 1] < 46) & (rgb[:, :, 2] < 46)
    dl, dn = ndimage.label(dark)
    edge = np.concatenate([dl[0, :], dl[-1, :], dl[:, 0], dl[:, -1]])
    bgl = np.unique(edge)
    bgl = bgl[bgl != 0]
    bg = np.isin(dl, bgl)

    clum = rgb.max(axis=2).astype(np.float32)
    soft = np.clip((clum - 8) / 50.0, 0, 1)
    alpha = np.where(bg, soft * 255.0, 255.0).astype(np.uint8)
    out = Image.fromarray(
        np.dstack([rgb.astype(np.uint8), alpha]), "RGBA"
    ).resize((SIZE, SIZE), Image.LANCZOS)

    p = os.path.join(OUT, SLUGS[idx] + ".png")
    out.save(p, optimize=True)
    transp = 100.0 * (np.asarray(out)[:, :, 3] < 8).sum() / (SIZE * SIZE)
    print(f"  {SLUGS[idx]:18s} box={box}  {os.path.getsize(p)//1024:4d} KB  {transp:.0f}% transparent")
    cells.append(out)

cell = 260
sheet = Image.new("RGBA", (cell * 5 + 6 * 12, cell + 24), (10, 9, 12, 255))
for i, c in enumerate(cells):
    sheet.alpha_composite(c.resize((cell, cell), Image.LANCZOS), (12 + i * (cell + 12), 12))
sheet.convert("RGB").save(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "_heads.jpg"), quality=90)
print("\ncontact sheet: _heads.jpg")
