// The five team members. Every other character belongs to a project.
//
// Portraits are real per-character cutouts sliced from the crew lineup by
// scripts/heads.py.
//
// NAMES AND BIOS ARE INVENTED PLACEHOLDER COPY, written to the brand voice
// at the user's request. Only "Degen" (the suit, D3G3N cap) is confirmed.
// Replace before launch if any of it misses.

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    slug: 'the-suit',
    name: 'Degen',
    role: 'Founder',
    bio: 'Runs the Emporium in a suit nobody asked him to wear. Has been early to everything and sold most of it, which is how he ended up with a sticker company.',
  },
  {
    slug: 'pink-balaclava',
    name: 'Rekt',
    role: 'Risk, retroactively',
    bio: 'Named for the one thing he has ever done consistently. Handles anything that involves admitting a mistake in public, because he has the most practice.',
  },
  {
    slug: 'blue-balaclava',
    name: 'Ngmi',
    role: 'Community',
    bio: 'Says it about every project, then buys the bag anyway. Somehow still here, which is either conviction or an inability to read a chart.',
  },
  {
    slug: 'gold-mask',
    name: 'Diamond',
    role: 'Treasury',
    bio: 'Has never sold a single token. Not conviction \u2014 he lost the keys years ago and turned it into a personality.',
  },
  {
    slug: 'purple-third-eye',
    name: 'Oracle',
    role: 'Research',
    bio: 'Third eye permanently open, charts permanently closed. Calls the top with total accuracy, roughly one week after it happens.',
  },
];
