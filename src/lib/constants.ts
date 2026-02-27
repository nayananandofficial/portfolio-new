import { Project, Service, Skill } from "@/types";
import { FaReact, FaNode, FaDatabase, FaGitAlt } from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiMongodb, 
  SiPostgresql, SiFirebase, SiExpress
} from "react-icons/si";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "React", icon: "FaReact", category: "frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend" },
  { name: "Node.js", icon: "FaNode", category: "backend" },
  { name: "Express", icon: "SiExpress", category: "backend" },
  { name: "MongoDB", icon: "SiMongodb", category: "database" },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "database" },
  { name: "Firebase", icon: "SiFirebase", category: "database" },
  { name: "Supabase", icon: "SiSupabase", category: "database" },
  { name: "Git", icon: "FaGitAlt", category: "tools" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "reactron",
    title: "Reactron - Virtual Chemistry Lab",
    description: "Interactive 3D chemistry lab built with ThreeJS",
    longDescription: "Reactron is a comprehensive virtual chemistry laboratory that allows students to perform experiments in a safe, interactive 3D environment. Built with React Three Fiber, it features realistic physics simulations and a complete chemical library.",
    image: "/projects/reactron.jpg",
    images: ["/projects/reactron-1.jpg", "/projects/reactron-2.jpg"],
    technologies: ["React", "Three.js", "React Three Fiber", "TypeScript", "Zustand"],
    category: "Web Application",
    githubUrl: "https://github.com/yourusername/reactron",
    liveUrl: "https://reactron.com",
    features: [
      "3D lab equipment with realistic physics",
      "Chemical library with 100+ compounds",
      "Volume and concentration calculations",
      "Interactive user onboarding",
      "Scoring system for experiments"
    ],
    challenges: [
      "Implementing realistic liquid physics in 3D",
      "Managing complex state across multiple components",
      "Optimizing performance for low-end devices"
    ],
    solutions: [
      "Used custom shaders for efficient liquid rendering",
      "Implemented Zustand for centralized state management",
      "Added LOD (Level of Detail) system for performance"
    ]
  },
  {
    id: "2",
    slug: "speakmind",
    title: "SpeakMind - Voice Assistant",
    description: "Voice-controlled AI assistant for learning and communication",
    longDescription: "SpeakMind is an AI-powered voice assistant designed to help students learn and communicate more effectively. It offers personalized learning paths.",
    image: "/projects/speakmind.png",
    images: ["/projects/speakmind-1.png", "/projects/speakmind-2.jpg"],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    category: "AI Application",
    githubUrl: "https://github.com/yourusername/speakmind",
    liveUrl: "https://speakmind.com",
    features: [
      "3D lab equipment with realistic physics",
      "Chemical library with 100+ compounds",
      "Volume and concentration calculations",
      "Interactive user onboarding",
      "Scoring system for experiments"
    ],
    challenges: [
      "Implementing realistic liquid physics in 3D",
      "Managing complex state across multiple components",
      "Optimizing performance for low-end devices"
    ],
    solutions: [
      "Used custom shaders for efficient liquid rendering",
      "Implemented Zustand for centralized state management",
      "Added LOD (Level of Detail) system for performance"
    ]
  }
  // Add more projects...
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    icon: "Code",
    features: [
      "Responsive design",
      "SEO optimization",
      "Performance tuning",
      "Custom animations"
    ],
    pricing: "Starting at $2000"
  },
  {
    id: "2",
    title: "API Development",
    description: "RESTful and GraphQL APIs for your applications",
    icon: "Server",
    features: [
      "Scalable architecture",
      "Documentation",
      "Security best practices",
      "Database integration"
    ],
    pricing: "Starting at $1500"
  },
  // Add more services...
];
