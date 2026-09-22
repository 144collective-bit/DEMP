# The Degen Emporium

`degenemporium.com` currently serves a **single holding page** while the new
site is built. Astro, static output, two routes:

| Route | What it is |
| --- | --- |
| `/` | The "coming soon" artwork, a one-line note and the X follow link. |
| `/404` | Catch-all for every v1 URL, pointing back at `/`. |

The page is `noindex` — there is nothing to rank until the new site lands.

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # -> dist/

## Where the v1 site went

The first site (home, about, team, projects, shop, links, news) was removed
in the commit that added this file. Nothing is lost — it is all in git
history at `f1c62ba` on `main`:

    git show f1c62ba --stat          # everything the old site was made of
    git checkout f1c62ba -- src      # bring the whole v1 source tree back

Raw brand art was left untouched in `brand/`, and the scripts that derive
build assets from it are still in `scripts/` — see `brand/README.md`.
