// Common types for the portfolio application

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  name: string;
  link: string;
  color: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
