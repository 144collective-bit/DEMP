// Shop line-up.
//
// ALL PLACEHOLDER. Names and lines are written to the brand voice; there is no
// per-product art yet and no prices have been set. `price` is intentionally a
// dash rather than a number -- a made-up price on a public page is a lie with a
// currency symbol on it. Checkout is not wired (see the notice on /shop).

export type Product = {
  slug: string;
  name: string;
  line: string;
  /** Placeholder only. Real prices go in once a fulfilment route is chosen. */
  price: string;
};

export const PRICE_TBC = '—';

export const products: Product[] = [
  {
    slug: 'balaclava-set',
    name: 'Balaclava Set',
    line: 'Five die-cuts, one per face. The whole crew in an envelope.',
    price: PRICE_TBC,
  },
  {
    slug: 'vocabulary-pack',
    name: 'Vocabulary Pack',
    line: 'REKT, NGMI, HFSP, HODL. Four words, cut tight to the lettering.',
    price: PRICE_TBC,
  },
  {
    slug: 'degen-single',
    name: 'Degen, Single',
    line: 'Just the suit. For people who only ever needed the one.',
    price: PRICE_TBC,
  },
  {
    slug: 'chrome-variant',
    name: 'Chrome Variant',
    line: 'Same art, foil stock. Catches the light, ruins the photograph.',
    price: PRICE_TBC,
  },
  {
    slug: 'full-sheet',
    name: 'The Full Sheet',
    line: 'Every design in the range, uncut, on one sheet. Scissors not included.',
    price: PRICE_TBC,
  },
  {
    slug: 'road-case-bundle',
    name: 'Road Case Bundle',
    line: 'Everything above in one go, for a surface that needs covering properly.',
    price: PRICE_TBC,
  },
];
