/*
  ─────────────────────────────────────────────────────────────
  THIS IS YOUR CONTENT FILE. Edit everything here — no need to
  touch any component code. Every page reads from this file.

  Images: drop files into /public/images/ then reference them
  as "/images/your-file.jpg". Anywhere image is null, the site
  shows a styled color-block placeholder until you add one.
  ─────────────────────────────────────────────────────────────
*/

export type VideoSource = "youtube" | "vimeo";

export interface VideoClip {
  /** used in the URL: lindseymcdowell.com/acting/clip/<id> */
  id: string;
  title: string;
  source: VideoSource;
  /** YouTube: the part after watch?v=   Vimeo: the number in the URL */
  videoId: string;
  duration?: string;
  featured?: boolean;
}

export interface Still {
  src: string | null;
  alt: string;
}

export interface Film {
  title: string;
  format: string;
  synopsis: string;
  poster: string | null;
  trailerUrl?: string;
  watchUrl?: string;
  /** awards, placements, selections — e.g. "Finalist — Amazon Voices Contest" */
  laurels: string[];
}

export interface Publication {
  title: string;
  publication: string;
  year: string;
  excerpt: string;
  image: string | null;
  readUrl?: string;
}

export interface PressItem {
  outlet: string;
  type: string;
  year: string;
  quote: string;
  url?: string;
  image: string | null;
}

export const site = {
  name: "Lindsey McDowell",
  heroLine:
    "Hi, I'm Lindsey. I act my heart out, write television, and bring the messiness of living to all types of screens.",
  heroAccentWord: "screens.",
  currently: "currently writing @ a boba tea cafe",
  email: "lindseymcd@me.com",
  instagram: "https://www.instagram.com/lindseymcqueen/",
  threads: "https://www.threads.com/@lindseymcqueen",
  imdb: "https://www.imdb.com/name/nm3775112/",
  actorsAccess: "https://resumes.actorsaccess.com/lindseymcdowell",
  /** drop your resume PDF at /public/resume.pdf */
  resumeUrl: "/resume.pdf",
};

/* ───────────── ACTING ───────────── */

export const actingClips: VideoClip[] = [
  {
    id: "demo-reel",
    title: "Grey's Anatomy Reel",
    source: "youtube",
    videoId: "rsbw6QgHSzg",
    duration: "2:33",
    featured: true,
  },
  {
    id: "comedic-reel",
    title: "Comedic Reel",
    source: "youtube",
    videoId: "5IWHj3fwqHU", // ← replace with your real YouTube ID
  },
  {
    id: "drumming-song",
    title: "Singing Drumming Song by Florence and The Machine",
    source: "youtube",
    videoId: "iCG-JczF7-g",
  },
  // {
  //   id: "short-film-clip",
  //   title: "Short Film Clip",
  //   source: "youtube",
  //   videoId: "dQw4w9WgXcQ",
  // },
];

/* 10 photos: first 5 fill block one (big photo LEFT), last 5 fill
   block two (big photo RIGHT). First photo of each group is the big one. */
export const stills: Still[] = [
  { src: "/images/act_gallery_1.jpeg", alt: "Nothing that Meredith Grey can't do!" },
  { src: "/images/act_gallery_2.jpg", alt: "Still from Hauntology" },
  { src: "/images/act_gallery_3.JPG", alt: "At the Sundance Film Festival premiere of To the Bone alongside Lily Collins, Maya Eshet, Ciara Bravo, and writer-director Marti Noxon" },
  { src: "/images/act_gallery_4.jpeg", alt: "Me and... well... don't make me say it!" },
  { src: "/images/act_gallery_5.jpg", alt: "On set with Laur Allen, Marci Miller, Camila Banus and Sal Stowers" },
  { src: "/images/act_gallery_6.png", alt: "Still from Douglas Fairbanks is Haunting Me" },
  { src: "/images/act_gallery_7.jpeg", alt: "In the studio with Marius DeVries, Justin Jurwitz and Damian Chazelle for La La Land" },
  { src: "/images/act_gallery_8.jpg", alt: "Still from Tingle" },
  { src: "/images/act_gallery_9.JPG", alt: "Photoshoot for The Plus Bus" },
  { src: "/images/act_gallery_10.JPEG", alt: "On set of Douglas Fairbanks is Haunting Me. Looking at Bernard David Jones like he holds the keys to making Barack Obama president again" },
];

/* ───────────── WRITING ───────────── */

export const featuredPilot = {
  title: "Developers",
  format: "half-hour comedy",
  logline:
    "Four misfits with wildly different dreams and dysfunctional skill sets are thrust together in a grueling coding bootcamp. Despite messy beginnings and constant chaos, they must overcome their differences and self-doubt to survive (and maybe even thrive) in the cutthroat world of tech.",
  keyArt: "/images/previs_developers.png",
  laurels: [
    "★ Finalist — Los Angeles Television, Script and Film Festival",
    "★ Finalist — Santa Barbara International Screenplay Awards",
  ],
  ctaLabel: "read the pilot",
  ctaUrl: "/developers_25.pdf", // link to script PDF or request form
};

export const television = {
  seriesTitle: "HouseBroken",
  credit: "Staff Writer · Season 2",
  blurb:
    "Served as a Staff Writer on Season 2 of FOX's HouseBroken, contributing story development, episode breaking, and comedy writing in a collaborative writers' room environment. Featuring Lisa Kudrow, Clea DuVall, Nat Faxon, Maria Bamford, Will Forte, Tony Hale, Sharon Horgan, Jason Mantzoukas, and Sam Richardson.",
  featuredPhoto: "/images/zoom_hb.JPG",
  featuredPhotoAlt: "The writers room at work",
  gallery: [
    { src: "/images/staffwriter_hb.JPG", alt: "Whiteboard breakdown" },
    // { src: "/images/staffwriter_hb.JPG", alt: "Index cards" },
    { src: "/images/writersroom_hb.jpeg", alt: "The room" },
    // { src: "/images/writersroom_hb.jpeg", alt: "Script pages" },
  ] as Still[],
};

export const films: Film[] = [
  {
    title: "Dominique's Baby",
    format: "Short film",
    synopsis: "Desperate for validation from family and friends, a 23 year old kickstarts her pregnancy and becomes an overnight viral sensation. The kicker? She’s totally faking it.",
    poster: "/images/dominiquesbaby_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=xm8uiZHeXqg",
    // watchUrl: "#",
    laurels: ["Finalist — Amazon All Voices Contest"],
  },
  {
    title: "MisSpelled",
    format: "Web series",
    synopsis: "Murder, mystery and magic collide in this series about a coven of clueless witches.",
    poster: "/images/misspelled_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=ZpPJy7tvguk",
    watchUrl: "https://www.youtube.com/watch?v=1VJIvWeGkJY",
    laurels: ["Tumblr Cult Classic"],
  },
];

export const publications: Publication[] = [
  {
    title: "A Call To Collect(ive)",
    publication: "VLY GRL Zine: Issue Three",
    year: "2023",
    excerpt:
      "I started to feel like I existed online and nowhere else.",
    image: "/images/vlygrl_poster.png",
    readUrl: "/lindseymcdowell_VLY-GRL-Zine-3_eBook.pdf",
  },
  // {
  //   title: "Second Published Piece",
  //   publication: "Another Publication",
  //   year: "2024",
  //   excerpt:
  //     "Short description or excerpt — magazine archive feel, generous whitespace.",
  //   image: null,
  // },
];

/* ───────────── PRESS ─────────────
   Newest first. Add a new item to the top and the page grows. */

export const press: PressItem[] = [
  {
    outlet: "Teen Vogue",
    type: "feature",
    year: "2017",
    quote: "The first time I saw Kendra (played by Lindsey McDowell) on the screen, I literally couldn't breathe. Where had this character been all my life?",
    url: "https://www.teenvogue.com/story/kendra-on-to-the-bone",
    image: "/images/vogue_image.webp",
  },
  {
    outlet: "Canvas Rebel",
    type: "interview",
    year: "2024",
    quote: "... my ideas always start out as an inkling at a cafe, with my family, or on the toilet.",
    url: "https://canvasrebel.com/meet-lindsey-mcdowell/",
    image: "https://cdn.canvasrebel.com/wp-content/uploads/2024/07/c-1718212891782-lindsey_mcdowell_img_7386-1.jpg",
  },
  {
    outlet: "Graveyard Shift Sisters",
    type: "feature",
    year: "2014",
    quote: "MisSpelled, created by writer and actress Lindsey McDowell is a brand new web series where five enchanted young women at a community college grapple with their unique abilities and discover each other.",
    url: "https://www.graveyardshiftsisters.com/archive//2014/07/new-web-series-misspelled-casts-more.html",
    image: "https://images.squarespace-cdn.com/content/v1/61f06c9b559617427cd2d766/c6f053cc-efec-44f5-a4d3-dc6b2467dc13/LOGO-GraveyardShiftSisters_DS2.png?format=1500w",
  },
  {
    outlet: "Black Alt Magazine",
    type: "interview",
    year: "2014",
    quote: "I like being an outsider sometimes because being on the inside can be boring. People have expectations of you. No one is ever as funny as you and your friends were in the cafeteria at school.",
    url: "https://www.blackaltmag.com/2014/10/at-bar-with-lindsey-mcdowell.html",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip3opXRqyWp-CmQuVOrQqbn7tvEp3KrKMe0w18uhx0WZ-l7gJn7lGV5VwFSO5ucdvzfY0ftRa65OrIamaP7MYxLOJmTz4FbAzyf3krGTDqCkgaDf1PhyXzh66b9Wpi7y79sLtfO7gvX8Bt/w266-h400/lindsey_mcdowell.jpg",
  },
  
];

/* ───────────── ABOUT ───────────── */

export interface PolaroidPhoto {
  src: string | null;
  alt: string;
  caption: string;
}

export const about = {
  headline: "hi again, it's lindsey ✺",
  sub: "seatbelts, everyone.",
  bio: [
    "Short, voicey bio paragraph. Where you're from, what you make, why you make it — written like you talk, not like a rep wrote it.",
    "Second paragraph for the heart: the messiness of living, the things you chase on the page and on camera.",
  ],
  polaroids: [
    { src: "/images/childhood_photo.jpg", alt: "Childhood photo", caption: "baby lindsey" },
    { src: "/images/me_now.png", alt: "On set", caption: "on set, laughing" },
  ] as PolaroidPhoto[],
  /** career stops, oldest → now. Add more and the bus route grows. */
  fieldTrip: ["theater kid", "first short film", "the writers room", "now ★"],
  stickers: [
    "girls who code",
    "actually likes celery",
    "barack obama follows me on twitter",
    "ask me about dating in LA",
    "loves Ohio",
  ],
};

/* ───────────── CONTACT ───────────── */

export const contact = {
  intro: "For bookings, scripts, and everything in between.",
  reps: [
    {
      label: "Theatrical Representation · Atlanta",
      name: "Tay Smith",
      company: "Smith Young Talent Agency",
      email: "tay@sytalentagency.com",
      phone: "",
    },
    {
      label: "Literary Representation",
      name: "Jeff Greenberg",
      company: "Gersh",
      email: "JGreenberg@gersh.com",
      phone: "",
    },
  ],
  direct: {
    label: "Direct",
    email: "lindseymcd@me.com",
  },
};
