import { Project } from "@/types";

export const NAV_LINKS = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export const CONTACT_EMAIL = "anandanayanofficial@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nayan-b-anand-15bb881a2/",
  github: "https://github.com/nayananandofficial/",
  x: "https://x.com/NayanAnand95879",
  instagram: "https://www.instagram.com/nayan__anand/",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "business-dashboard",
    title: "Business Dashboard MVP",
    description: "Internal dashboard for managing records with a clean CRUD workflow.",
    longDescription:
      "Structured CRUD admin system for managing internal operational records\nBuilt with Next.js and TypeScript for predictable record workflows and table-based management\nDesigned modular state and reusable components to support scalable admin operations",
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
      "Centralized form state for predictable record updates",
      "Modeled data structures to match backend-ready CRUD patterns",
      "Kept UI components modular to enable future API integration",
    ],
  },
  {
    id: "2",
    slug: "southspice",
    title: "SouthSpice - Restaurant Ordering System (Demo)",
    description: "Restaurant ordering demo focused on menu flow, cart logic, and checkout UX.",
    longDescription:
      "Restaurant ordering system simulating real-world menu to cart to checkout flow\nBuilt with React and TypeScript using structured state management for order handling\nDesigned mock API layers and reusable data models to mirror production backend behavior",
    image: "/projects/southspice.png",
    images: ["/projects/southspice-1.png", "/projects/southspice-2.png"],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Web Speech API",
    ],
    category: "Web Application UI (Demo)",
    githubUrl: "https://github.com/Visuals-Smart-Tech/SOUTHSPICE.git",
    liveUrl: "https://www.southspice.visualstech.in/",
    features: [
      "Dynamic menu browsing with category-based restaurant item discovery",
      "Cart management with quantity updates and aggregated order state",
      "End-to-end ordering flow from menu selection to checkout screen",
    ],
    enggdecs: [
      "Centralized cart state to maintain consistent order data across views",
      "Structured mock API responses to match backend-ready contracts",
      "Designed responsive layout to support stable ordering across devices",
    ],
  },
  {
    id: "3",
    slug: "speakmind",
    title: "SpeakMind - AI Voice Assistant",
    description: "Voice-first AI assistant connecting speech input, model response, and playback.",
    longDescription:
      "Real-time voice interaction system handling speech-to-text, LLM processing, and text-to-speech output\nBuilt with a Node.js and Express backend to process async voice requests and manage response flow\nEngineered modular API services, validation, and state handling to maintain smooth conversation without latency breaks",
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
      "Real-time speech to AI to voice response pipeline",
      "Async request handling with controlled response flow",
      "Modular backend architecture for scalable API integration",
    ],
    enggdecs: [
      "Designed async flow to handle speech input and API latency without blocking UI",
      "Structured backend into modular services for clean API orchestration",
      "Managed frontend state transitions for listening, processing, and playback phases",
    ],
  },
];
