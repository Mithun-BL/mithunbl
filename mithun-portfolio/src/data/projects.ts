export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  glowColor: string;
  role: string;
  timeline: string;
  githubUrl: string;
  demoUrl: string;
  longDescription: string;
  features: string[];
  challenges: string;
  solutions: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'novashop-headless-store',
    title: 'NovaShop Headless Store',
    description: 'A premium headless e-commerce store layout with full cart, inventory management, checkout forms, and secure dashboard layouts.',
    tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
    image: '/images/novashop_preview.png',
    glowColor: '139, 92, 246', // Violet
    role: 'Lead Frontend Engineer',
    timeline: '3 Months (2024)',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.novashop.com',
    longDescription: 'NovaShop is a fully decoupled headless e-commerce storefront designed for maximum conversion and speed. It features a custom server-side rendered cart, dynamic product detail routes, real-time inventory queries, checkout forms integrated with Stripe elements, and a dashboard for customers to trace past orders.',
    features: [
      'Decoupled architecture utilizing Next.js static site generation with incremental regeneration.',
      'Custom React context-based shopping cart with local persistence and sync.',
      'Multi-step wizard checkout with client-side field validation and Stripe element security.',
      'Dynamic dashboard detailing client order histories, invoices, and shipping timelines.'
    ],
    challenges: 'Ensuring seamless synchronization of cart items across multiple tabs without introducing page load layout shifts (CLS) from SSR/hydration mismatches.',
    solutions: 'Implemented a hook utilizing localStorage inside useEffect, combined with skeleton loaders during initial hydration to prevent sudden shifts.'
  },
  {
    slug: 'synapse-ai-content-studio',
    title: 'Synapse AI Content Studio',
    description: 'A modern AI-assisted editor interface providing analytical insights, markdown compilation, and automated generation features.',
    tags: ['Next.js', 'TypeScript', 'Gemini API', 'Tailwind'],
    image: '/images/scribeai_preview.png',
    glowColor: '6, 182, 212', // Cyan
    role: 'Full Stack Developer',
    timeline: '2 Months (2024)',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.synapse.com',
    longDescription: 'Synapse AI Content Studio is a premium web application for writers and content creators. Users can generate marketing copy, write markdown articles, receive real-time SEO advice, and perform sentiment analysis on their text, powered by the Gemini API.',
    features: [
      'Interactive rich text and markdown editor with real-time word counts and syntax rendering.',
      'Gemini API integration for contextual copy generation, grammar refining, and formatting.',
      'Automated SEO scoring analyzer that checks keywords, title densities, and visual readability.',
      'Instant draft saving via local storage and database sync for robust data protection.'
    ],
    challenges: 'Handling real-time token streaming from the Gemini API and rendering the markdown response incrementally without freezing the UI.',
    solutions: 'Utilized React Server Actions and readable streams, updating the editor state progressively through chunk-by-chunk content appending.'
  },
  {
    slug: 'devlytics-branch-monitor',
    title: 'Devlytics Branch Monitor',
    description: 'An developer-oriented git visualization aggregator plotting commit histories, branch lines, contributor metrics, and status logs.',
    tags: ['React', 'Recharts', 'TypeScript', 'Tailwind'],
    image: '/images/devportal_preview.png',
    glowColor: '236, 72, 153', // Pink
    role: 'Frontend Architect',
    timeline: '4 Months (2023)',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.devlytics.com',
    longDescription: 'Devlytics is a comprehensive dashboard tool for engineering leads and developers. It hooks into Git repositories to construct interactive commit frequency charts, active branches flow diagrams, developer velocity statistics, and deployment logs.',
    features: [
      'Interactive SVG timelines plotting active repository branch lines and merge commits.',
      'Velocity data visualizations powered by Recharts with support for dark mode gradients.',
      'Developer contribution leaderboards sorting commits, pull requests, and code deletions.',
      'Flexible filtering tools enabling analytics tracking across dates, tags, and branches.'
    ],
    challenges: 'Parsing complex commit trees dynamically on the client side and maintaining 60fps animations inside Recharts diagrams with hundreds of data nodes.',
    solutions: 'Offloaded heavy git history parsers to a background Web Worker and utilized memoized custom SVGs to restrict dashboard re-renders.'
  }
];
