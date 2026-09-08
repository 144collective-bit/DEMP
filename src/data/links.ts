// PulseChain ecosystem projects.
//
// Names and domains come straight off the supplied graffiti wordmarks.
//
// THESE ARE REAL, THIRD-PARTY PROJECTS. The `blurb` on each one is deliberately
// generic: it describes the *link* -- that it goes to the official site -- and
// says nothing about what the project does, who runs it, what it is worth or
// what anyone should do about it. That is not laziness. Writing anything
// specific here would mean either guessing or making a claim on someone else's
// behalf on an outward-facing page, and neither is acceptable.
//
// If real descriptions are wanted, they should come from the projects
// themselves or from someone who can stand behind them. Until then these stay
// as they are, behind the draft notice on /links.
//
// Several art variants existed for most of these. The set below was chosen
// to match: script/drip lettering, single line, mark included.

export type LinkItem = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  blurb: string;
};

export const links: LinkItem[] = [
  {
    slug: 'pulsechain-com',
    name: 'PulseChain',
    domain: 'pulsechain.com',
    url: 'https://pulsechain.com',
    blurb: 'A name you will run into constantly out here. Straight to the official site — read it from the source rather than from us.',
  },
  {
    slug: 'hex-com',
    name: 'HEX',
    domain: 'hex.com',
    url: 'https://hex.com',
    blurb: 'You have seen the logo. We link the official site and leave the explaining to the people whose job it is.',
  },
  {
    slug: 'pulsex-com',
    name: 'PulseX',
    domain: 'pulsex.com',
    url: 'https://pulsex.com',
    blurb: 'Another one that turns up in every other conversation in this corner of the internet. Official site, their words.',
  },
  {
    slug: 'provex-com',
    name: 'ProveX',
    domain: 'provex.com',
    url: 'https://provex.com',
    blurb: 'Rounds out the wordmarks on the wall. Official site — go and have a look for yourself.',
  },
];
