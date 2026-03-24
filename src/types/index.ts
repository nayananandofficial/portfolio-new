export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  video?: {
    url: string
    poster?: string
    duration?: number
  }
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  enggdecs: string[];
}
export interface NavLink {
  name: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
