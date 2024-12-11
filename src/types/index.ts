export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  doi?: string;
  url?: string;
}

export interface Research {
  id: number;
  title: string;
  description: string;
  image?: string;
  category: string;
}