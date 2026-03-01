export const NAV_LINKS = ["Experience", "Projects", "Skills", "Education", "Contact"];

export const SKILLS = [
    { cat: "Frontend", items: ["React.js", "Next.js (Server Components)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
    { cat: "State & Data", items: ["Zustand", "Context API", "TanStack Query", "REST API Integration", "Axios"] },
    { cat: "UI & Styling", items: ["Tailwind CSS", "Recharts", "Responsive Design", "Framer Motion"] },
    { cat: "Performance & Testing", items: ["Core Web Vitals (LCP, CLS, FID)", "React Testing Library", "Unit Testing"] },
    { cat: "Tools", items: ["Git/GitHub", "Vercel", "Agile (Jira)", "Postman"] },
];

export const PROJECTS = [
    {
        num: "01", name: "AI Interview", date: "July 2025 - Aug 2025",
        desc: "AI-powered web builder featuring real-time website generation via OpenAI API streaming.",
        bullets: [
            "Developed reusable dynamic UI components for real-time website generation and editing, reducing development time by ~30%.",
            "Implemented sidebar-based live editing tools for styles, layout, and content updates, enhancing UX and flexibility.",
            "Integrated REST APIs for prompt-based dynamic rendering, improving data fetching efficiency by ~25%.",
            "Designed fully responsive layouts with Tailwind CSS, ensuring cross-device compatibility.",
        ],
        stack: ["Next.js", "OpenAI", "Tailwind"],
    },
    {
        num: "02", name: "Chatbot", date: "March 2025",
        desc: "Responsive chatbot interface with real-time API integration and intelligent UI rendering.",
        bullets: [
            "Implemented intelligent UI rendering for AI-based question matching.",
            "Designed inactivity detection system triggering auto-response and admin notifications.",
            "Optimized component updates to maintain smooth chat interactions.",
        ],
        stack: ["Next.js", "OpenAI", "Tailwind"],
    },
    {
        num: "03", name: "Abax Kingfisher", date: "July 2024 - Jan 2025",
        desc: "Full frontend of eCommerce platform from landing page to checkout with performance optimization.",
        bullets: [
            "Optimized page performance, reducing load time from 10s to 6s and improving LCP and CLS scores.",
            "Implemented dynamic product loading and client-side data handling to improve UX.",
            "Secured API requests using WordPress nonce validation and disabled unused endpoints.",
        ],
        stack: ["HTML", "CSS", "JS", "Optimization"],
    },
    {
        num: "04", name: "Access Homes", date: "Aug 2025",
        desc: "Responsive, high-performance admin dashboard with paginated data tables and real-time status indicators.",
        bullets: [
            "Designed admin dashboard improving administrative task efficiency by ~30%.",
            "Implemented modular component architecture with reusable table, modal, and form components.",
            "Integrated HTML-to-PDF export functionality with structured layout formatting.",
        ],
        stack: ["Next.js", "Tailwind", "PDF Export"],
    },
    {
        num: "05", name: "Clearview", date: "Jan 2026 - Feb 2026",
        desc: "Multi-section admin panel with isolated scroll containers and interactive analytics.",
        bullets: [
            "Architected admin panel with isolated scroll containers, improving efficiency by ~40%.",
            "Implemented interactive charts using Recharts and structured data tables for real-time analytics visualization.",
            "Reduced unnecessary component re-renders using React.memo and useMemo, improving performance by ~25%.",
        ],
        stack: ["React", "Tailwind", "Recharts", "Zustand"],
    },
];

export const MARQUEE_ITEMS = [
    "Frontend Architect", "Core Web Vitals Expert", "Next.js Specialist", "UI Consistency",
    "40% Performance Boost", "AI-Powered Interfaces", "React.js", "TypeScript",
];

export const Links = [
    {
        label: "Email",
        val: 'Email',
        href: `mailto:${import.meta.env.VITE_USER_EMAIL}`,
    },
    {
        label: "Phone",
        val: "8287787553",
        href: `tel:${import.meta.env.VITE_USER_PHONE}`
    },
    {
        label: "LinkedIn",
        val: "LinkedIn",
        href: `https://linkedin.com/in/${import.meta.env.VITE_USER_LINKEDIN}`,
    },
    {
        label: "GitHub",
        val: "GitHub",
        href: `https://github.com/${import.meta.env.VITE_USER_GITHUB}`,
    },
];