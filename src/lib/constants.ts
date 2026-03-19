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
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/#services" },
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
    slug: "business-dashboard",
    title: "Business Dashboard MVP",
    description: "Internal Admin Dashboard - CRUD Workflow Demo",
    longDescription:
      "Structured CRUD admin workflow built for managing internal operational records\nBuilt with Next.js and TypeScript to handle record creation, editing, deletion, and table-based management in a clean dashboard interface\nFocused on predictable state flow, reusable form patterns, and a frontend architecture that can transition smoothly into real backend integration\n\nFrontend:\nCRUD-oriented dashboard architecture\nReusable form and table workflow\nMock data layer prepared for API migration",

    image: "/projects/business-dashboard.png",
    images: [
      "/projects/business-dashboard-1.jpg",
      "/projects/business-dashboard-2.jpg",
    ],

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    category: "Web Application (Admin Dashboard)",

    githubUrl: "https://github.com/nayananandofficial/business-dashboard.git",
    liveUrl: "https://business-dashboard-neon-eight.vercel.app",

    features: [
      "Dashboard table view for structured operational record management",
      "Create, edit, and delete workflows with immediate UI updates",
      "Page-based admin flow connecting dashboard, create, and edit views",
    ],
    enggdecs: [
      "Organized record management around reusable form state and predictable update flow",
      "Modeled mock data structures to mirror backend-ready CRUD behavior for easier API integration",
      "Kept tables, forms, and navigation modular so the dashboard can scale without coupling UI concerns",
    ],
  },
  {
    id: "2",
    slug: "southspice",
    title: "SouthSpice - Restaurant Ordering System (Demo)",
    description: "Restaurant Ordering System - Client Demo",
    longDescription:
      "Client-ready restaurant ordering flow designed to simulate a real digital ordering experience\nBuilt with React and TypeScript to support menu browsing, cart interactions, and checkout progression across a responsive interface\nStructured the frontend around reusable ordering state and backend-like mock data so the demo can evolve into a production-connected system\n\nFrontend:\nMenu browsing to checkout pipeline\nResponsive cart and ordering flow\nMock API-style data setup for future backend integration",
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
      "Dynamic menu browsing with category-based restaurant item discovery",
      "Cart management with quantity updates and aggregated order state",
      "End-to-end ordering flow from menu selection to checkout screen",
    ],
    enggdecs: [
      "Centralized cart state to keep item updates, totals, and checkout data consistent across the interface",
      "Structured mock menu and API response data to resemble backend contracts for smoother future integration",
      "Designed responsive layouts and interaction feedback to support a stable ordering flow on mobile and desktop",
    ],
  },
  {
    id: "3",
    slug: "speakmind",
    title: "SpeakMind - AI Voice Assistant",
    description: "AI-powered voice assistant with real-time speech interaction",
    longDescription:
      "Real-time voice interaction system handling STT â†’ LLM â†’ TTS pipeline \n Built a Node.js + Express backend to process async voice requests and manage response flow\n Engineered modular API services, validation, and state handling to maintain smooth conversation without latency breaks\n\n Backend:\n API-based architecture\n Route: /api/voice\n Validation & error handling implemented",
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
    githubUrl: "https://github.com/nayananandofficial/speakmind.git",
    liveUrl: "",
    features: [
      "Real-time speech â†’ AI â†’ voice response pipeline",
      "Async request handling with controlled response flow",
      "Modular backend architecture for scalable API integration",
    ],
    enggdecs: [
      "Designed async flow to handle speech input and API latency without blocking UI",
      "Structured backend into modular services for clean API orchestration",
      "Managed frontend state transitions for listening, processing, and playback phases",
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
