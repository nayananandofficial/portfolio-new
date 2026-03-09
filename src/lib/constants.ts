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
      "A lightweight internal business dashboard built to demonstrate a structured CRUD workflow for managing operational records. The project focuses on clean UI structure, predictable state management, and practical admin-tool design using modern frontend architecture.",

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
      "Dashboard interface displaying records in a structured table view",
      "Create new records using a simple form workflow",
      "Edit existing records with immediate UI updates",
      "Delete records directly from the dashboard interface",
      "Navigation between dashboard, create, and edit pages",
      "Structured mock data layer simulating backend record management",
      "Responsive layout optimized for desktop and tablet viewing",
      "Clean UI focused on clarity and operational usability",
    ],

    challenges: [
      "Designing a clear CRUD workflow without relying on a backend API",
      "Managing record state across dashboard, create, and edit views",
      "Maintaining predictable UI updates when records change",
      "Ensuring the interface remains readable and functional with minimal styling",
      "Structuring the application so backend integration can be added later",
    ],

    solutions: [
      "Implemented a centralized mock data layer to simulate record persistence",
      "Designed a predictable component structure separating dashboard and form logic",
      "Used controlled form inputs to maintain consistent record updates",
      "Kept UI components modular for easier expansion when APIs are introduced",
      "Maintained a minimal Tailwind-based design system for clarity and maintainability",
    ],
  },
  {
    id: "2",
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
  {
    id: "3",
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
