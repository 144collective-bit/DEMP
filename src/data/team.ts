// The five team members. Every other character belongs to a project and
// lives on /projects, not here.
//
// Portraits are real per-character cutouts sliced from the crew lineup by
// scripts/heads.py -- not crops of the group hero.
//
// TODO: names and roles are placeholders.

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
};

export const team: TeamMember[] = [
  { slug: 'the-suit',         name: 'The Suit',       role: 'placeholder name' },
  { slug: 'blue-balaclava',   name: 'Blue',           role: 'placeholder name' },
  { slug: 'gold-mask',        name: 'Gold Mask',      role: 'placeholder name' },
  { slug: 'purple-third-eye', name: 'Third Eye',      role: 'placeholder name' },
  { slug: 'pink-balaclava',   name: 'Pink',           role: 'placeholder name' },
];
