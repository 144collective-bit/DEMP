// PulseChain ecosystem projects.
//
// Names and domains come straight off the supplied graffiti wordmarks.
// Descriptions are absent on purpose: I don't know what each project does
// or what the Emporium's relationship to it is, and guessing on an
// outward-facing page would be worse than a blank.
//
// Several art variants existed for most of these. The set below was chosen
// to match: script/drip lettering, single line, mark included.

export type LinkItem = {
  slug: string;
  name: string;
  domain: string;
  url: string;
};

export const links: LinkItem[] = [
  { slug: 'pulsechain-com', name: 'PulseChain', domain: 'pulsechain.com', url: 'https://pulsechain.com' },
  { slug: 'hex-com',        name: 'HEX',        domain: 'hex.com',        url: 'https://hex.com' },
  { slug: 'pulsex-com',     name: 'PulseX',     domain: 'pulsex.com',     url: 'https://pulsex.com' },
  { slug: 'provex-com',     name: 'ProveX',     domain: 'provex.com',     url: 'https://provex.com' },
];
