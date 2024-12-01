export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  emoji?: string;
  link?: string;
  github?: string;
  duration?: string;
  features?: string[];
  technologies?: {
    name: string;
    icon?: string;
    description: string;
  }[];
  gallery?: {
    image: string;
    caption: string;
  }[];
  challenges?: string[];
  solutions?: string[];
  teamSize?: number;
  role?: string;
  testimonials?: {
    name: string;
    role: string;
    comment: string;
    avatar?: string;
  }[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon?: string;
  companyUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'mobile';
  emoji?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  icon?: string;
}