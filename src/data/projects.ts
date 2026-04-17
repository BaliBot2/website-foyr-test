export type ProjectType = 'Residential' | 'Commercial' | 'Farmhouse' | 'Apartment' | 'Duplex';

export interface Project {
  slug: string;
  name: string;
  location: string;
  sqft?: number;
  type: ProjectType;
  cover: string; // path relative to /public or placeholder keyword
  alt: string;
  description?: string;
  featured?: boolean;
  pageRefs: number[];
}

export const projects: Project[] = [
  {
    slug: 'begwani-residence',
    name: 'Begwani Residence',
    location: 'Model Town, Delhi',
    sqft: 8000,
    type: 'Duplex',
    cover: 'placeholder',
    alt: 'Begwani Residence — 8000 sq ft duplex in Model Town, featuring spiral staircase foyer',
    description: 'An 8,000 sq.ft. duplex residence in Model Town featuring a dramatic spiral staircase foyer, multi-room showcase with marble floors and custom millwork throughout.',
    featured: true,
    pageRefs: [11, 12, 13, 14, 15],
  },
  {
    slug: 'pioneer-araya',
    name: 'Pioneer Araya',
    location: 'Gurgaon, Haryana',
    sqft: 5600,
    type: 'Apartment',
    cover: 'placeholder',
    alt: 'Pioneer Araya — 5600 sq ft apartment in Gurgaon with dramatic ceilings and marble floors',
    description: 'A 5,600 sq.ft. luxury apartment in Gurgaon featuring dramatic double-height ceilings, Calacatta marble floors, and bespoke furniture.',
    featured: true,
    pageRefs: [9, 10],
  },
  {
    slug: 'nimesh-arora-residence',
    name: 'Nimesh Arora Residence',
    location: 'Delhi',
    sqft: undefined,
    type: 'Residential',
    cover: 'placeholder',
    alt: 'Nimesh Arora Residence — 450 yard property in Delhi',
    description: 'A 450-yard residence in Delhi featuring contemporary interiors with natural wood accents and curated lighting design.',
    featured: true,
    pageRefs: [32],
  },
  {
    slug: 'dr-gautam-yadav-farmhouse',
    name: 'Dr. Gautam Yadav Farmhouse',
    location: 'Rewari, Haryana',
    sqft: undefined,
    type: 'Farmhouse',
    cover: 'placeholder',
    alt: 'Dr. Gautam Yadav Farmhouse at Rewari — architectural renders and floor plans',
    description: 'A farmhouse retreat in Rewari, Haryana, designed with Vastu-compliant layouts and photo-realistic 3D renders guiding construction.',
    pageRefs: [6, 7],
  },
  {
    slug: 'anup-shokeen-residence',
    name: 'Mr. Anup Shokeen Residence',
    location: 'Vikaspuri, Delhi',
    sqft: undefined,
    type: 'Residential',
    cover: 'placeholder',
    alt: 'Anup Shokeen Residence — contemporary dark interiors in Vikaspuri',
    description: 'Contemporary dark interiors for a prominent Delhi figure, featuring deep-toned wall panels, statement lighting, and bespoke furniture.',
    pageRefs: [8],
  },
  {
    slug: 'jain-residence',
    name: 'Jain Residence',
    location: 'Pitampura, Delhi',
    sqft: 3000,
    type: 'Residential',
    cover: 'placeholder',
    alt: 'Jain Residence — 3000 sq ft in Pitampura, Delhi',
    description: 'A 3,000 sq.ft. family residence in Pitampura designed with elegant arch motifs, fluted wall panels, and warm walnut accents.',
    pageRefs: [20],
  },
  {
    slug: 'veer-nagar-jain-colony',
    name: '16 Veer Nagar, Jain Colony',
    location: 'Delhi',
    sqft: undefined,
    type: 'Residential',
    cover: 'placeholder',
    alt: '16 Veer Nagar Jain Colony — drawing room and dining area renders',
    description: 'Drawing room and dining area design featuring curated material palette, ribbed ceiling details, and sculpted accent walls.',
    pageRefs: [21, 22],
  },
  {
    slug: 'vallab-vihar-apartment',
    name: 'Vallab Vihar Apartment',
    location: 'Delhi NCR',
    sqft: undefined,
    type: 'Apartment',
    cover: 'placeholder',
    alt: 'Vallab Vihar Apartment — living and dining area design',
    description: 'Living and dining area design for this apartment, combining clean lines with warm textures and artful lighting.',
    pageRefs: [26],
  },
  {
    slug: 'varun-verma-little-unicorns',
    name: 'Little Unicorns Playschool',
    location: 'Delhi NCR',
    sqft: undefined,
    type: 'Commercial',
    cover: 'placeholder',
    alt: 'Little Unicorns Playschool — owner Varun Verma commercial interior design',
    description: 'A vibrant, child-friendly playschool interior combining safety-first design principles with an engaging, colourful aesthetic.',
    pageRefs: [11],
  },
  {
    slug: 'parasvnath-developers',
    name: 'Parasvnath Developers',
    location: 'Delhi NCR',
    sqft: undefined,
    type: 'Commercial',
    cover: 'placeholder',
    alt: 'Parasvnath Developers — tower lobby, clubhouse, and sample flat interiors',
    description: 'Tower lobby, clubhouse, and sample flat interiors for a leading real estate developer — showcasing premium residential living.',
    pageRefs: [35],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectTypes: ProjectType[] = [
  'Residential',
  'Commercial',
  'Farmhouse',
  'Apartment',
  'Duplex',
];
