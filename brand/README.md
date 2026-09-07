# Brand source art

Raw, unprocessed inputs only. Everything the site actually imports lives in
`src/assets/` — do not duplicate files between the two.

| File | What it is |
| --- | --- |
| `hero-source.png` | The crew lineup on black, exactly as supplied. |
| `collage-source.png` | The sticker collage on black, exactly as supplied. |

## Deriving the build assets

    python scripts/dekey.py brand/hero-source.png
    # -> hero-source-cutout.png; renamed to src/assets/hero-crew.png

Removes only black that is *connected to the image border*, so the suit, the
dog's fur and every interior outline survive. A plain colour key would punch
holes through the characters.

    python scripts/gen_bg.py brand/collage-source.png
    # -> public/bg-collage.jpg

Pre-darkens the collage (34% brightness, 62% chroma) so page legibility never
depends on a single CSS opacity value. Also takes 3.4 MB down to ~250 KB.

    python scripts/gen_brand.py
    # -> public/favicon.ico, apple-touch-icon.png, icon-512.png, og-default.jpg

The six graffiti page headers arrived already cut out with transparency and
need no processing; they sit in `src/assets/headers/`.
