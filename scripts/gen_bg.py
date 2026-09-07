"""Turn the sticker collage into a dimmed background plate.

The collage is dense and high-chroma. Laid behind text at full strength it
would destroy legibility, so it is pre-darkened and desaturated HERE rather
than relying on CSS opacity alone -- that keeps the CSS layer subtle and
means the shipped file is small.
"""
import sys, os
from PIL import Image, ImageEnhance

SRC = sys.argv[1] if len(sys.argv) > 1 else r"C:\Users\mikem\Desktop\DegenEmporium\collage.png"
ROOT = r"C:\Users\mikem\Desktop\DegenEmporium\DegenEmporium.com"
OUT = os.path.join(ROOT, "public", "bg-collage.jpg")

if not os.path.exists(SRC):
    raise SystemExit(f"NOT FOUND: {SRC}\nSave the collage there and re-run.")

im = Image.open(SRC).convert("RGB")
print("source", im.size)

# Downscale: it is never shown at full strength, so detail beyond ~1800px
# is wasted bytes.
target_w = 1800
if im.size[0] > target_w:
    r = target_w / im.size[0]
    im = im.resize((target_w, round(im.size[1] * r)), Image.LANCZOS)

im = ImageEnhance.Color(im).enhance(0.62)       # pull chroma back
im = ImageEnhance.Brightness(im).enhance(0.34)  # deep dim
im = ImageEnhance.Contrast(im).enhance(0.88)    # flatten so nothing spikes

im.save(OUT, quality=72, optimize=True, progressive=True)
print(f"wrote {OUT}  {im.size}  {os.path.getsize(OUT)//1024} KB")

# A brighter plate for the hero halo region, used at very low opacity.
print("done")
