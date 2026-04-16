export type LinkItem = {
  label: string;
  href: string;
};

export type CompanyStat = {
  label: string;
  value: string;
};

export type CompanyContent = {
  name: string;
  tagline: string;
  description: string;
  foundedBy: string[];
  stats: CompanyStat[];
};

export type HeroContent = {
  headline: string;
  subheadline: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
};

export type AboutContent = {
  title: string;
  mission: string;
  vision: string;
  values: string[];
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ProjectItem = {
  name: string;
  summary: string;
  tech: string[];
  result: string;
  url?: string;
  owner?: string;
  stars?: number;
};

export type TestimonialItem = {
  client: string;
  feedback: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  github?: string;
  location?: string;
  username?: string;
  avatar?: string;
};

export type ContactContent = {
  title: string;
  email: string;
  phone: string;
  address: string;
};

export type FooterContent = {
  copyright: string;
  links: LinkItem[];
};

export type SeoContent = {
  title: string;
  description: string;
};

export type SiteContent = {
  company: CompanyContent;
  hero: HeroContent;
  about: AboutContent;
  services: ServiceItem[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  team: TeamMember[];
  contact: ContactContent;
  footer: FooterContent;
  seo: SeoContent;
};
