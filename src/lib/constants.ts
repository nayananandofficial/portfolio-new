import { Project, Service, Skill } from "@/types";
import { FaReact, FaNode, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "/#contact" },
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
    description: "3D chemistry lab simulation built as part of a team project",
    longDescription:
      "Reactron is a virtual chemistry laboratory platform designed to simulate lab experiments in an interactive 3D environment. I contributed to Three.js integration and simulation optimization within a collaborative development team.",
    image: "/projects/reactron.jpg",
    images: ["/projects/reactron-1.jpg", "/projects/reactron-2.jpg"],
    technologies: ["React", "Three.js", "React Three Fiber", "TypeScript"],
    category: "Web Application",
    githubUrl: "",
    liveUrl: "",
    features: [
      "3D laboratory simulation environment",
      "Interactive experiment workflows",
      "Dynamic rendering of lab components",
    ],
    challenges: [
      "Integrating Three.js into an existing React architecture",
      "Managing complex simulation state interactions",
      "Improving rendering performance",
    ],
    solutions: [
      "Refactored simulation components for better separation of concerns",
      "Optimized rendering updates to reduce unnecessary re-renders",
      "Improved state flow between UI and simulation layers",
    ],
  },
  {
    id: "2",
    slug: "speakmind",
    title: "SpeakMind - AI Voice Assistant",
    description: "AI-powered voice assistant with real-time speech interaction",
    longDescription:
      "SpeakMind is a voice-enabled AI assistant that integrates speech-to-text, large language models, and text-to-speech to enable interactive conversations. Built with a React frontend and Express backend.",
    image: "/projects/speakmind.png",
    images: ["/projects/speakmind-1.png", "/projects/speakmind-2.jpg"],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "OpenRouter API",
      "SpeechSynthesis",
    ],
    category: "AI Application",
    githubUrl: "",
    liveUrl: "",
    features: [
      "Speech-to-text integration",
      "LLM-powered responses",
      "Text-to-speech output",
      "Dynamic API-based response generation",
    ],
    challenges: [
      "Handling asynchronous voice processing",
      "Managing API response latency",
      "Structuring clean backend request flow",
    ],
    solutions: [
      "Built modular service architecture for API calls",
      "Implemented input validation and error handling",
      "Optimized response flow for smoother interaction",
    ],
  },
  {
    id: "3",
    slug: "southspice",
    title: "SouthSpice - Restaurant Ordering System (Demo)",
    description: "Restaurant Ordering System - Client Demo",
    longDescription:
      "A customizable restaurant ordering web application built as a client-ready demo. Simulates real-world ordering flows including menu browsing, cart management, and checkout interactions.",
    image: "/projects/southspice.png",
    images: ["/projects/southspice-1.png", "/projects/southspice-2.png"],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Web Speech API",
    ],
    category: "Web Application UI(Demo)",
    githubUrl: "https://github.com/Visuals-Smart-Tech/SOUTHSPICE.git",
    liveUrl: "https://www.southspice.visualstech.in/",
    features: [
      "Dynamic restaurant and menu rendering(currently using mock data for demo)",
      "Cart management with quantity updates and item aggregation",
      "Interactive menu browsing and category filtering",
      "Structured mock API responses to simulate backend data flow, allowing the UI architecture to transition easily to real endpoints.",
      "Client-ready ordering flow UI (browse → add to cart → checkout screen)",
      "Toast notifications for user interaction feedback",
      "Responsive layout optimized for mobile and desktop",
      "Codebase structured for future backend integration",
    ],
    challenges: [
      "Designing scalable component architecture for future backend integration",
      "Managing cart state across multiple routed pages",
      "Avoiding unnecessary re-renders during cart updates",
      "Structuring mock data to simulate real-world API responses",
      "Maintaining clean UI state transitions between menu and checkout views",
    ],
    solutions: [
      "Created modular reusable components for menus and cart logic",
      "Implemented centralized cart state management pattern",
      "Optimized rendering logic to reduce redundant updates",
      "Designed data structures to mirror backend-ready API format",
      "Separated presentation and logic layers for easier future expansion",
    ],
  },
  // Add more projects...
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies",
    icon: "Code",
    features: [
      "Responsive design",
      "SEO optimization",
      "Performance tuning",
      "Custom animations",
    ],
    pricing: "Starting at $2000",
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
      "Database integration",
    ],
    pricing: "Starting at $1500",
  },
  // Add more services...
];
