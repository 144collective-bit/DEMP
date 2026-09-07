// Portrait crop windows into brand/hero-crew.png (1105 x 726).
// There is no individual character art -- the only source is the group
// hero, so every card crops a window out of that one sheet.
//
// name/role are PLACEHOLDERS describing what each figure looks like.
// Replace with the real crew names and roles when they exist.

export const SHEET = { w: 1105, h: 726 };

export type CrewMember = {
  slug: string;
  name: string;
  role: string;
  /** crop box in sheet pixels: [x, y, w, h] */
  box: [number, number, number, number];
};

export const crew: CrewMember[] = [
  { slug: 'the-suit',       name: 'The Suit',       role: 'placeholder name', box: [440,   0, 190, 250] },
  { slug: 'pink-balaclava', name: 'Pink Balaclava', role: 'placeholder name', box: [ 70,   6, 152, 240] },
  { slug: 'blue-balaclava', name: 'Blue Balaclava', role: 'placeholder name', box: [228,   6, 148, 240] },
  { slug: 'diamond-mask',   name: 'Diamond Mask',   role: 'placeholder name', box: [622,   8, 150, 240] },
  { slug: 'third-eye',      name: 'Third Eye',      role: 'placeholder name', box: [778,   4, 162, 244] },
  { slug: 'the-dog',        name: 'The Dog',        role: 'placeholder name', box: [  4, 262, 170, 268] },
  { slug: 'green-punk',     name: 'Green Punk',     role: 'placeholder name', box: [172, 240, 158, 256] },
  { slug: 'pink-smiley',    name: 'Pink Smiley',    role: 'placeholder name', box: [792, 236, 134, 224] },
  { slug: 'yellow-smiley',  name: 'Yellow Smiley',  role: 'placeholder name', box: [936, 172, 152, 244] },
  { slug: 'skull-hood',     name: 'Skull Hood',     role: 'placeholder name', box: [886, 376, 168, 254] },
  { slug: 'eye-mascot',     name: 'Eye',            role: 'placeholder name', box: [188, 516, 148, 196] },
  { slug: 'mouth-mascot',   name: 'Mouth',          role: 'placeholder name', box: [478, 522, 168, 190] },
  { slug: 'alien-mascot',   name: 'Alien',          role: 'placeholder name', box: [648, 506, 148, 204] },
];

/** CSS background shorthand values that crop `box` into a container. */
export function cropStyle(box: [number, number, number, number], src: string, containerW = 300) {
  const [x, y, w] = box;
  const s = containerW / w;
  return [
    `background-image:url(${src})`,
    `background-size:${(SHEET.w * s).toFixed(1)}px ${(SHEET.h * s).toFixed(1)}px`,
    `background-position:${(-x * s).toFixed(1)}px ${(-y * s).toFixed(1)}px`,
  ].join(';');
}
