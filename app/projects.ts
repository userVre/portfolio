export type Project = {
  slug: string;
  name: string;
  kind: string;
  text: string;
  color: string;
  url?: string;
  image?: string;
  overview: string;
  highlights: string[];
};

// EDIT PROJECTS HERE: copy one complete object to add a new project.
export const projects: Project[] = [
  {
    slug: "housora",
    name: "Housora",
    kind: "AI room design",
    text: "AI room design concepts from your own photo.",
    color: "housora",
    url: "https://housora.pages.dev/",
    image: "https://housora.pages.dev/static/images/hero-after-1920w.avif",
    overview: "A room-design experience that turns a photo into a visual starting point for a new interior direction.",
    highlights: ["Upload a room photo", "Choose room and style", "Generate a design concept"],
  },
  {
    slug: "bunyan",
    name: "Bunyan",
    kind: "Live website",
    text: "Explore the live project.",
    color: "bunyan",
    url: "https://bunyan-roan.vercel.app/",
    overview: "Visit the live website to explore the complete project.",
    highlights: ["Live experience", "Responsive layout", "Direct project link"],
  },
  {
    slug: "qimma",
    name: "Qimma",
    kind: "Live website",
    text: "Explore the live project.",
    color: "qimma",
    url: "https://qimma-five.vercel.app/en/",
    overview: "Visit the live website to explore the complete project.",
    highlights: ["Live experience", "Responsive layout", "Direct project link"],
  },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
