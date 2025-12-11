export enum Page {
  Home = 'home',
  Program = 'program',
  Insights = 'insights',
  About = 'about',
  Contact = 'contact',
  Portal = 'portal'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Policy Brief' | 'Economic Analysis';
  summary: string;
  author: string;
  date: string;
  imageUrl: string;
  content?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
  email?: string;
}

export interface CurriculumModule {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'PDF' | 'Video' | 'Dataset';
  date: string;
  url: string;
}