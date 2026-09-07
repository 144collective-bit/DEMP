// PulseChain ecosystem projects.
//
// Names and domains come straight off the supplied graffiti wordmarks.
// Descriptions are deliberately absent -- I don't know what each project
// does or what the Emporium's relationship to it is, and guessing on an
// outward-facing page would be worse than a blank.

export type LinkItem = {
  name: string;
  domain: string;
  url: string;
  /** filled in once the wordmark art is on disk */
  art?: string;
};

export const links: LinkItem[] = [
  { name: 'HEX',    domain: 'hex.com',    url: 'https://hex.com',    art: 'hex-com' },
  { name: 'PulseX', domain: 'pulsex.com', url: 'https://pulsex.com', art: 'pulsex-com' },
  { name: 'ProveX', domain: 'provex.com', url: 'https://provex.com', art: 'provex-com' },
];
