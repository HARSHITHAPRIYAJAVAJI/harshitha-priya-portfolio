export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullOverview: string;
  heroImage: string;
  galleryImages: string[];
  category: string;
  techStack: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl: string;
  features: {
    title: string;
    description: string;
  }[];
  architecture: {
    overview: string;
    frontend: string;
    backend: string;
    database: string;
    cachingOrRealtime?: string;
    diagramDescription?: string;
  };
  challengesSolved: {
    problem: string;
    solution: string;
    impact: string;
  }[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Contract' | 'Trainee';
  summary: string;
  technologies: string[];
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeType: string;
  description: string;
  skillsCovered: string[];
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}
