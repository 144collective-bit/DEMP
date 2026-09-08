// The Emporium's OWN projects -- sticker drops, art series, community things.
// Distinct from src/data/links.ts, which points at other people's sites.
//
// ALL OF THIS IS INVENTED PLACEHOLDER COPY, written to the brand voice so the
// page can be seen fully populated. Nothing here describes work that has
// actually happened. Replace the whole array before launch.
//
// `status` is deliberately a small closed set: the page styles each value and
// an unknown one would render unstyled.

export type ProjectStatus = 'Shipped' | 'In progress' | 'Sketching' | 'Parked';

export type Project = {
  slug: string;
  name: string;
  kind: string;
  line: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    slug: 'balaclava-set',
    name: 'The Balaclava Set',
    kind: 'Sticker drop',
    line: 'The five faces, die-cut with a white keyline so they still read on a black lid.',
    status: 'Shipped',
  },
  {
    slug: 'vocabulary',
    name: 'Vocabulary',
    kind: 'Sticker drop',
    line: 'One word per sticker, cut tight to the lettering. The blunt half of the dictionary.',
    status: 'Shipped',
  },
  {
    slug: 'crew-lineup',
    name: 'Crew Lineup',
    kind: 'Art series',
    line: 'The full cast drawn as one piece, then cut apart so each character can stand alone.',
    status: 'Shipped',
  },
  {
    slug: 'chrome-run',
    name: 'Chrome Run',
    kind: 'Sticker drop',
    line: 'Same art, foil stock. Currently losing an argument with the ink on dark colours.',
    status: 'In progress',
  },
  {
    slug: 'wall-collage',
    name: 'Wall Collage',
    kind: 'Print',
    line: 'Every design in the range on one large-format sheet, sized for an actual wall.',
    status: 'In progress',
  },
  {
    slug: 'dispatches',
    name: 'Dispatches',
    kind: 'Ongoing',
    line: 'The news feed. Short, irregular, written by whoever is annoyed enough to write it.',
    status: 'Shipped',
  },
  {
    slug: 'slap-map',
    name: 'Slap Map',
    kind: 'Community',
    line: 'A wall of photos of stickers out in the world. Needs a moderation plan first.',
    status: 'Sketching',
  },
  {
    slug: 'poster-one',
    name: 'Poster One',
    kind: 'Print',
    line: 'The design that only worked at poster size, going back to being a poster.',
    status: 'Sketching',
  },
  {
    slug: 'the-forum',
    name: 'The Forum',
    kind: 'Community',
    line: 'Dropped on purpose. An empty forum looks worse than none, and this crew will not moderate one.',
    status: 'Parked',
  },
];
