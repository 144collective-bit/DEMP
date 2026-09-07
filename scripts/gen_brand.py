"""Generate favicon + OG card from the crew hero (the only source art)."""
from PIL import Image
import os

ROOT = r"C:\Users\mikem\Desktop\DegenEmporium\DegenEmporium.com"
HERO = os.path.join(ROOT, "brand", "hero-crew.png")
PUB = os.path.join(ROOT, "public")
os.makedirs(PUB, exist_ok=True)

hero = Image.open(HERO).convert("RGBA")
print("hero", hero.size)

# ---- favicon candidates: [x, y, w, h] windows into the hero ------------
cands = {
    "A-diamond":  (470, 180, 130, 110),
    "B-suithead": (488,  14, 104, 110),
    "C-eye":      (186, 516, 150, 150),
    "D-alien":    (648, 506, 148, 150),
}

# contact sheet so the crops can be judged at real favicon sizes
pad, cell = 14, 150
sheet = Image.new("RGBA", (len(cands) * (cell + pad) + pad, cell + 90 + pad * 2), (10, 9, 12, 255))
for i, (name, box) in enumerate(cands.items()):
    x, y, w, h = box
    crop = hero.crop((x, y, x + w, y + h))
    big = crop.resize((cell, cell), Image.LANCZOS)
    sheet.alpha_composite(big, (pad + i * (cell + pad), pad))
    for j, s in enumerate((48, 32, 16)):
        small = crop.resize((s, s), Image.LANCZOS)
        sheet.alpha_composite(small, (pad + i * (cell + pad) + j * 52, pad + cell + 12))
sheet.save(os.path.join(ROOT, "brand", "_favicon-candidates.png"))
print("wrote brand/_favicon-candidates.png")

# ---- OG card: 1200x630, hero fitted on the brand black ----------------
og = Image.new("RGBA", (1200, 630), (10, 9, 12, 255))
inner_w, inner_h = 1200 - 96, 630 - 84
s = min(inner_w / hero.size[0], inner_h / hero.size[1])
art = hero.resize((round(hero.size[0] * s), round(hero.size[1] * s)), Image.LANCZOS)
og.alpha_composite(art, ((1200 - art.size[0]) // 2, (630 - art.size[1]) // 2))
og.convert("RGB").save(os.path.join(PUB, "og-default.jpg"), quality=88, optimize=True)
print("wrote public/og-default.jpg", og.size,
      os.path.getsize(os.path.join(PUB, "og-default.jpg")) // 1024, "KB")
