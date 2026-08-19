import type { Project, Experience, SkillCategory, Certification, StatItem, NavItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Harshitha Priya',
  role: 'Full-Stack Software Engineer',
  techStackSubtitle: 'JavaScript • TypeScript • React • Node.js',
  shortBio:
    'Building scalable web applications with modern frontend technologies, robust backend systems and clean software architecture. Passionate about AI, problem solving and creating elegant digital experiences.',
  fullBio: `I am a Full-Stack Software Engineer dedicated to crafting high-performance, aesthetically refined digital products that bridge engineering rigor with luxury visual design. 

With deep experience across modern React ecosystems, TypeScript, Node.js, and relational & document databases, I focus on building scalable web architectures, resilient REST APIs, and delightful micro-interactions. My approach centers on clean code, testability, algorithmic efficiency, and an unwavering attention to design detail inspired by companies like Apple, Vercel, and Linear.`,
  email: 'javajiharshithapriya@gmail.com',
  phone: '+91 6300657893',
  github: 'https://github.com/HARSHITHAPRIYAJAVAJI',
  linkedin: 'https://www.linkedin.com/in/harshitha-priya-javaji',
  location: 'Bangalore, India (Open to Worldwide Remote & Relocation)',
  availability: 'Available for Full-time Roles & High-Impact Engineering Projects',
  resumeUrl: '#resume-modal',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '#resume', isButton: true },
];

export const STATS: StatItem[] = [
  {
    label: 'Industry Internships',
    value: 3,
    suffix: '+',
    description: 'Practical experience in fast-paced software teams',
  },
  {
    label: 'Production & Projects',
    value: 15,
    suffix: '+',
    description: 'Full-stack applications & open-source solutions',
  },
  {
    label: 'Core Technologies',
    value: 25,
    suffix: '+',
    description: 'Modern frameworks, databases, and DevOps tools',
  },
  {
    label: 'Verified Certifications',
    value: 5,
    suffix: '+',
    description: 'Recognized by IBM, Edunet, & industry leaders',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages for algorithm design, systems, and full-stack development',
    iconName: 'Code2',
    skills: [
      { name: 'JavaScript', level: 'Advanced', highlight: true },
      { name: 'TypeScript', level: 'Advanced', highlight: true },
      { name: 'Python', level: 'Proficient' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'SQL', level: 'Advanced', highlight: true },
      { name: 'C++', level: 'Proficient' },
    ],
  },
  {
    title: 'Frontend Architecture',
    description: 'Creating high-performance, accessible, and responsive user interfaces',
    iconName: 'Layout',
    skills: [
      { name: 'React', level: 'Advanced', highlight: true },
      { name: 'Tailwind CSS', level: 'Advanced', highlight: true },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'Responsive Design', level: 'Expert', highlight: true },
      { name: 'Vite', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend Systems',
    description: 'Architecting scalable server runtimes, middleware, and secure APIs',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', level: 'Advanced', highlight: true },
      { name: 'Express.js', level: 'Advanced', highlight: true },
      { name: 'Flask', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Expert', highlight: true },
      { name: 'JWT Authentication', level: 'Advanced', highlight: true },
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Relational & NoSQL persistence with indexing and query optimization',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', highlight: true },
      { name: 'MongoDB', level: 'Advanced', highlight: true },
      { name: 'MySQL', level: 'Proficient' },
    ],
  },
  {
    title: 'Developer Tools & Cloud',
    description: 'Modern development workflows, containerization, and automated deployments',
    iconName: 'Cpu',
    skills: [
      { name: 'Git', level: 'Advanced', highlight: true },
      { name: 'GitHub', level: 'Advanced', highlight: true },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'Vercel', level: 'Advanced' },
    ],
  },
  {
    title: 'Software Engineering Principles',
    description: 'Computer science fundamentals, structural patterns, and optimization',
    iconName: 'Binary',
    skills: [
      { name: 'Data Structures', level: 'Advanced', highlight: true },
      { name: 'Algorithms', level: 'Advanced', highlight: true },
      { name: 'OOP', level: 'Advanced' },
      { name: 'Agile & Scrum', level: 'Proficient' },
      { name: 'Debugging', level: 'Expert', highlight: true },
      { name: 'Performance Optimization', level: 'Advanced', highlight: true },
      { name: 'System Design Basics', level: 'Proficient' },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'sydney-leads',
    company: 'Sydney Leads Digital Marketing',
    role: 'Full-Stack Software Engineer Intern',
    duration: 'Aug 2025 – Nov 2025',
    location: 'Remote',
    type: 'Internship',
    summary:
      'Engineered enterprise client portals, real-time campaign performance analytics dashboards, and automated webhook integration microservices.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Redis', 'Git'],
    achievements: [
      'Architected responsive lead-generation client portals and analytics dashboards serving 10,000+ monthly interactions with sub-200ms API response times.',
      'Engineered automated REST API workflows integrating CRM webhooks and email automation pipelines, cutting manual client onboarding turnaround by 45%.',
      'Refactored frontend component tree with modern React hooks, virtualization, and memoization, boosting Google Lighthouse performance scores from 72 to 98.',
      'Implemented robust JWT token validation and role-based permissions to protect sensitive lead data across client and internal tiers.',
    ],
  },
  {
    id: 'code-tapasya',
    company: 'Code Tapasya',
    role: 'Software Engineering Intern',
    duration: 'Mar 2025 – Jun 2025',
    location: 'Bengaluru, India',
    type: 'Internship',
    summary:
      'Developed core features for an interactive developer learning platform, automated code evaluation pipelines, and student assessment workflows.',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'REST APIs', 'Postman', 'Vite', 'Tailwind CSS'],
    achievements: [
      'Built and maintained responsive interactive assessment modules with syntax-highlighted code editors and instant test-case feedback.',
      'Designed and documented 20+ RESTful API endpoints with Express and MongoDB, maintaining 99.5% uptime during collegiate hackathons.',
      'Authored comprehensive API automated testing suites in Postman, reducing integration bug reports by 35% before production deployment.',
      'Collaborated closely in an Agile engineering team participating in daily standups, code reviews, and bi-weekly sprint planning.',
    ],
  },
  {
    id: 'ibm-skillsbuild',
    company: 'IBM SkillsBuild',
    role: 'Cloud & Web Architecture Trainee',
    duration: 'Nov 2024 – Feb 2025',
    location: 'Virtual',
    type: 'Trainee',
    summary:
      'Completed intensive training in cloud infrastructure, AI concepts, scalable web development, and secure software engineering methodologies.',
    technologies: ['Python', 'Cloud Computing', 'REST APIs', 'Data Structures', 'Git', 'Agile Methodology'],
    achievements: [
      'Engineered and presented a cloud-deployed prototype application utilizing REST APIs and AI-assisted data parsing algorithms.',
      'Gained deep proficiency in containerization fundamentals, modern deployment pipelines, and defensive programming practices.',
      'Awarded top honors and formal certifications in Artificial Intelligence Fundamentals and Cloud Application Architecture.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'gratio-collective',
    slug: 'gratio-collective',
    title: 'Gratio Collective',
    tagline: 'Luxury Creator Commerce & Automated Revenue Splitting Platform',
    description:
      'A high-performance, multi-tenant digital commerce engine enabling digital creators and agencies to build customized storefronts, manage multi-party royalty splits, and track real-time analytics.',
    fullOverview: `Gratio Collective is a luxury-oriented SaaS commerce ecosystem built to give digital creators, design studios, and agencies total autonomy over their digital product drops and licensing revenue.

Traditional creator platforms suffer from clunky storefront customization, slow payout distribution, and rigid permission models. Gratio Collective addresses this with a modular headless architecture, instant royalty distribution using transactional database isolation, and a pixel-perfect, luxury minimalist management portal.`,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    ],
    category: 'Full-Stack SaaS / E-Commerce',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Stripe API'],
    featured: true,
    liveUrl: 'https://gratio-collective-demo.vercel.app',
    githubUrl: 'https://github.com/HARSHITHAPRIYAJAVAJI/gratio-collective',
    metrics: [
      { label: 'P99 Latency', value: '< 180ms' },
      { label: 'Concurrent Users', value: '5,000+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Conversion Lift', value: '+38%' },
    ],
    features: [
      {
        title: 'Dynamic Storefront Builder',
        description: 'Live WYSIWYG luxury theme customizer with real-time responsive preview, custom typography injection, and instantaneous preview rendering.',
      },
      {
        title: 'Automated Multi-Party Royalty Splits',
        description: 'Enables creators to define granular revenue percentages per collaborator with automatic payout routing upon transaction clearance.',
      },
      {
        title: 'Real-Time Telemetry & Conversion Analytics',
        description: 'Interactive analytics dashboard tracking GMV, cart abandonment, geographic breakdown, and customer lifetime value (LTV).',
      },
      {
        title: 'Resilient Payment Webhook Architecture',
        description: 'Idempotent event processing with exponential backoff and replay mechanisms to ensure zero double-billing or dropped transactions.',
      },
    ],
    architecture: {
      overview: 'Micro-service-ready layered architecture separating the React SPA client, an Express API gateway with middleware verification, and a PostgreSQL persistence tier.',
      frontend: 'React with TypeScript, Vite, Tailwind CSS, Framer Motion for spring physics, and Zustand for state management.',
      backend: 'Node.js runtime with Express.js, structured controller-service-repository pattern, JWT authorization, and rate-limiting middleware.',
      database: 'PostgreSQL with connection pooling, indexed search queries, and strict ACID transaction blocks for monetary distributions.',
      cachingOrRealtime: 'Redis memory cache for session states and active catalog caching with automatic TTL eviction.',
      diagramDescription: 'Client (React/TS) -> Cloudflare CDN -> Express API Gateway -> JWT Auth & Validation -> Business Service Layer -> PostgreSQL Database & Redis Cache.',
    },
    challengesSolved: [
      {
        problem: 'Concurrent checkout race conditions causing inventory over-allocation during high-demand product drops.',
        solution: 'Implemented pessimistic database row locks (`SELECT ... FOR UPDATE`) inside atomic transaction boundaries in PostgreSQL.',
        impact: 'Completely eliminated inventory over-selling while maintaining sub-200ms transaction checkout latencies.',
      },
      {
        problem: 'Frontend re-render lag when manipulating complex nested storefront JSON configuration trees.',
        solution: 'Refactored monolithic context into granular Zustand slices with shallow equality comparison selectors.',
        impact: 'Reduced unnecessary DOM re-renders by 82% and achieved smooth 60 FPS slider interactions.',
      },
    ],
  },
  {
    id: 'smartcampus-plus',
    slug: 'smartcampus-plus',
    title: 'SmartCampus+',
    tagline: 'Intelligent Academic & University Resource Management Ecosystem',
    description:
      'An enterprise academic operating system featuring automated timetable conflict resolution, smart laboratory equipment booking, role-based grading portals, and attendance auditing.',
    fullOverview: `SmartCampus+ is an integrated enterprise-grade campus resource and academic management system designed to eliminate scheduling friction across complex multi-department institutions.

Colleges and universities often struggle with disjointed legacy software for room allocations, faculty scheduling, and lab reservation. SmartCampus+ provides a unified, role-based platform that intelligently resolves scheduling bottlenecks through algorithmic constraint checking.`,
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    ],
    category: 'Enterprise Web Application',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Postman'],
    featured: true,
    liveUrl: 'https://smartcampus-plus.vercel.app',
    githubUrl: 'https://github.com/HARSHITHAPRIYAJAVAJI/smartcampus-plus',
    metrics: [
      { label: 'Scheduling Speed', value: '10x Faster' },
      { label: 'Conflict Rate', value: '0.0%' },
      { label: 'Daily Bookings', value: '2,500+' },
      { label: 'Admin Hours Saved', value: '15 hrs/wk' },
    ],
    features: [
      {
        title: 'Algorithmic Conflict-Free Timetabling',
        description: 'Constraint satisfaction algorithm that analyzes room capacity, faculty availability, and department requirements to produce optimal weekly schedules.',
      },
      {
        title: 'Laboratory & Asset Reservation',
        description: 'Interactive campus map and calendar for reserving high-end lab apparatus, projection halls, and computing clusters with automated approval chains.',
      },
      {
        title: 'Multi-Tier Role-Based Access Control',
        description: 'Granular permissions tailored for Students, Teaching Assistants, Professors, Department Heads, and System Administrators.',
      },
      {
        title: 'Attendance & Academic Progress Analytics',
        description: 'Visual tracking of student performance trends, attendance thresholds, and automated alert dispatches for at-risk cases.',
      },
    ],
    architecture: {
      overview: 'Modular microservice-inspired architecture containerized via Docker for seamless multi-environment staging and deployment.',
      frontend: 'React SPA built with TypeScript, Tailwind CSS, Lucide Icons, and React Router for nested dynamic routing.',
      backend: 'Express.js REST API with validation middleware, request logging, and structured business services.',
      database: 'PostgreSQL with relational schema indexing, foreign key constraints, and automated database migrations.',
      cachingOrRealtime: 'In-memory Redis cache for frequently accessed weekly schedules and real-time room availability checks.',
      diagramDescription: 'Client -> Reverse Proxy (Nginx) -> Express Server -> Role Auth Guard -> Database Layer (PostgreSQL) + Redis Cache.',
    },
    challengesSolved: [
      {
        problem: 'High database load when hundreds of faculty members query complex weekly timetables simultaneously during peak enrollment.',
        solution: 'Implemented Redis multi-tier caching with key tagging for automatic cache invalidation when room assignments update.',
        impact: 'Decreased database CPU utilization by 65% and cut schedule retrieval response time from 640ms to 42ms.',
      },
      {
        problem: 'Handling edge cases in multi-slot lab equipment reservations with conflicting recurring dates.',
        solution: 'Engineered custom date-range overlap validation algorithms using PostgreSQL interval queries and transaction isolation.',
        impact: 'Eliminated double-booking incidents across all campus facilities completely.',
      },
    ],
  },
  {
    id: 'studymate-plus',
    slug: 'studymate-plus',
    title: 'StudyMate+',
    tagline: 'AI-Powered Collaborative Learning Workstation & Knowledge Hub',
    description:
      'An intelligent study workspace combining spaced repetition flashcards, automated document concept extraction, synchronized peer study rooms, and focus analytics.',
    fullOverview: `StudyMate+ is an AI-enhanced productivity and collaborative study suite designed for modern engineering and computer science students.

By combining the proven scientific principles of spaced repetition with modern natural language processing and real-time WebSockets, StudyMate+ transforms passive reading into active, high-retention mastery.`,
    heroImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
    ],
    category: 'AI & Collaborative Tools',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'WebSocket', 'Tailwind CSS', 'Framer Motion'],
    featured: true,
    liveUrl: 'https://studymate-plus.vercel.app',
    githubUrl: 'https://github.com/HARSHITHAPRIYAJAVAJI/studymate-plus',
    metrics: [
      { label: 'Retention Boost', value: '+42%' },
      { label: 'Cards Studied', value: '100k+' },
      { label: 'Sync Latency', value: '< 45ms' },
      { label: 'Active Study Rooms', value: '850+' },
    ],
    features: [
      {
        title: 'Spaced Repetition Algorithm (SM-2)',
        description: 'Calculates optimal review intervals based on difficulty ratings, minimizing study time while maximizing long-term memory retention.',
      },
      {
        title: 'AI Document Summarizer & Flashcard Generator',
        description: 'Parses lecture notes, PDFs, and code repositories to automatically extract key definitions, formulas, and concept quizzes.',
      },
      {
        title: 'Real-Time Synchronized Study Rooms',
        description: 'Peer-to-peer audio-ready collaborative study spaces with synchronized Pomodoro timers, shared whiteboards, and live chat.',
      },
      {
        title: 'Deep Work Telemetry & Streak Tracker',
        description: 'Comprehensive productivity analytics displaying daily focus streaks, topic heatmaps, and retention velocity graphs.',
      },
    ],
    architecture: {
      overview: 'Dual-protocol architecture utilizing HTTP/REST for CRUD persistence and persistent WebSocket channels for real-time room synchronization.',
      frontend: 'React with TypeScript, Tailwind CSS, Lucide Icons, and Canvas-based visual graph representations.',
      backend: 'Node.js runtime with Express.js, WebSocket server (`ws`), and AI processing pipeline controllers.',
      database: 'MongoDB with Mongoose ODM for flexible document hierarchies (study decks, notes, flashcard history).',
      cachingOrRealtime: 'WebSocket bidirectional channels with heartbeat pings and auto-reconnection logic.',
      diagramDescription: 'React App <-> WebSocket Gateway (Realtime State) + Express API (Document CRUD) <-> MongoDB Storage.',
    },
    challengesSolved: [
      {
        problem: 'Synchronizing multi-user timer states and shared whiteboard annotations across varied network connections without jitter.',
        solution: 'Implemented client-side interpolation with server-authoritative timestamps and delta-compression for WebSocket messages.',
        impact: 'Achieved seamless real-time synchronization with less than 45ms end-to-end latency.',
      },
      {
        problem: 'Slow client rendering when managing decks with over 1,000+ formula and code-rich flashcards.',
        solution: 'Engineered a virtualized card windowing list that only mounts visible DOM nodes during active review cycles.',
        impact: 'Cut initial deck load time by 78% and memory consumption by 60%.',
      },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-ai-cloud',
    title: 'Artificial Intelligence Fundamentals & Cloud Architecture',
    issuer: 'IBM SkillsBuild',
    issueDate: '2025',
    credentialId: 'IBM-SB-AI-90284',
    credentialUrl: 'https://www.credly.com/org/ibm',
    badgeType: 'Verified Enterprise Credential',
    description:
      'Comprehensive validation of core machine learning concepts, natural language processing, enterprise cloud solution design, and AI ethics.',
    skillsCovered: ['Artificial Intelligence', 'Cloud Architecture', 'Python', 'REST APIs', 'Ethical AI'],
  },
  {
    id: 'edunet-fullstack',
    title: 'Full-Stack Web Development & Enterprise Engineering',
    issuer: 'Edunet Foundation (in association with AICTE)',
    issueDate: '2025',
    credentialId: 'EF-FSWD-88412',
    credentialUrl: 'https://edunetfoundation.org',
    badgeType: 'National Technical Certification',
    description:
      'Rigorous engineering certification covering modern frontend architecture, backend microservices, database design, and agile product development.',
    skillsCovered: ['React', 'Node.js', 'PostgreSQL', 'System Architecture', 'Agile Methodologies'],
  },
  {
    id: 'code-tapasya-react',
    title: 'Advanced React Architecture & Software Engineering',
    issuer: 'Code Tapasya',
    issueDate: '2025',
    credentialId: 'CT-ARSE-2025-04',
    credentialUrl: 'https://codetapasya.com',
    badgeType: 'Specialized Engineering Honors',
    description:
      'Mastery in modern React 18/19 patterns, state management architectures, custom hooks, performance profiling, and full-stack integration.',
    skillsCovered: ['Advanced React', 'TypeScript', 'Performance Profiling', 'State Management', 'Testing'],
  },
];
