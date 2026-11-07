export interface ExperienceLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
  links?: ExperienceLink[];
}

export interface ProjectItem {
  title: string;
  context: string;
  note: string;
  tech: string[];
  github?: string;
  live?: string;
  liveLabel?: string;
  tutorial?: string;
}

export const socials = {
  github: 'https://github.com/rif42',
  email: 'rifkyariya42@gmail.com',
  phone: '+6285878611239',
  location: 'Pedurungan, Semarang',
};

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'C#', 'Kotlin', 'Java'],
  },
  {
    label: 'Frontend',
    items: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'Tamagui'],
  },
  {
    label: 'Backend & Database',
    items: ['Django', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Filament PHP'],
  },
  {
    label: 'AI & ML',
    items: ['TensorFlow', 'Computer Vision', 'NLP', 'LLM Integration', 'RAG', 'Cellpose'],
  },
  {
    label: 'DevOps & Tools',
    items: ['Docker', 'Git', 'Elasticsearch', 'Kibana', 'ElasticAPM', 'OpenTelemetry'],
  },
  {
    label: 'Soft',
    items: ['Teaching & Mentoring', 'Project Management', 'ID-EN Translation', 'Startup Adaptability'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Bootcamp Teacher',
    company: 'LeWagon AI and Automation Bootcamp',
    dates: 'Aug 2026 – Present',
    location: 'Bali, Indonesia',
    bullets: [
      'Train professionals on how to use AI-powered automation to improve business efficiency.',
    ],
    links: [
      { label: 'make.com', href: 'http://make.com' },
    ],
  },
  {
    role: 'Bootcamp Student and AI Engineer',
    company: 'LeWagon DataScience Bootcamp',
    dates: 'Jun 2026 – Present',
    location: 'Bali, Indonesia',
    bullets: [
      'Finished LeWagon’s international-standard data science curriculum bootcamp.',
      'Created and automated LeWagon’s knowledge base using scripts and agent harness.',
      'Assist in social media post content creation and management.',
    ],
  },
  {
    role: 'Lead AI Engineer and Lecturer',
    company: 'Agung Putra University & Stem Cell Research',
    dates: 'Nov 2025 – Jun 2026',
    location: 'Semarang, Indonesia (onsite)',
    bullets: [
      'Designed, coded, and deployed the Agung Putra University main page.',
      'Developed a QR-based presence system with minimal, customized architecture.',
      'Built computer-vision solutions to improve stem cell production efficiency.',
      'Developed and taught world-class AI materials from scratch based on state-of-the-art research papers — from basic algorithms to artificial neurons to LLM-powered apps.',
      'Trained software devs on the latest AI tooling, improving work efficiency by at least 150%.',
      'Developed a factory-scale knowledge management system on a locally hosted LLM, RAG, and role-based data lake.',
    ],
    links: [
      { label: 'apu.ac.id', href: 'https://apu.ac.id/' },
      { label: 'absen-qr', href: 'https://github.com/rif42/absen-qr' },
      { label: 'stem-cell confluency', href: 'https://github.com/rif42/phantast-py-stem-cell-confluency' },
    ],
  },
  {
    role: 'Project Manager and Fullstack Developer',
    company: 'HandymanKiosk (Startup)',
    dates: 'Sep 2025 – May 2026',
    location: 'Indonesia, Saudi, Canada (remote)',
    bullets: [
      'Built a platform for homeowners to book home improvement jobs from local handymen.',
      'React Native frontend, Django backend, PostgreSQL, Tamagui framework.',
      'Agentic engineering workflow with OpenCode agent harness and Oh-My-Opencode; cheap models (Kimi K2.5, GLM 5.1) for maximum efficiency.',
      'Owned the project from PRD phase through deployment.',
      'Integrated Stripe with a custom payment cut rate for both parties.',
    ],
    links: [
      { label: 'solutionbank-mobile', href: 'https://github.com/solution-bank/solutionbank-mobile' },
    ],
  },
  {
    role: 'English Teacher',
    company: 'Cetta English',
    dates: '2025 – Present',
    location: 'Semarang, Indonesia (remote)',
    bullets: [
      'Teach English in private and group classes with students of all ages.',
      'Cultivate a relaxing, comfortable, and encouraging environment in every class.',
    ],
  },
  {
    role: 'Programming Mentor (Roblox, JS, Python, AI)',
    company: 'Timedoor Academy',
    dates: '2024 – Present',
    location: 'Remote',
    bullets: [
      'Led 500+ class sessions with international students across all age groups.',
      'Chosen as Teacher of the Year in the MENA branch to give testimony at the yearly meeting.',
    ],
    links: [
      { label: 'teaching sample', href: 'https://www.youtube.com/watch?v=0p3CLpqwdzU' },
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Metapals / Kindred (Startup)',
    dates: '2023 – 2025',
    location: 'Remote',
    bullets: [
      'Developed and maintained the Next.js website and a PixiJS-powered Chromium extension app.',
      'Built a cross-platform auth system for web2 and web3 protocols using Tezos.',
      'Shipped an AI prototype to win the Gemini Competition on a FastAPI backend — in 3 days.',
      'Implemented ElasticAPM, Google Analytics, and OpenTelemetry to improve debugging efficiency.',
      'Shipped major product releases with brands like Teletubbies and AxieInfinity.',
    ],
    links: [
      { label: 'kindredlabs.ai', href: 'https://www.kindredlabs.ai/' },
      { label: 'Teletubbies', href: 'https://sanctuary.kindredlabs.ai/event/teletubbies' },
      { label: 'AxieInfinity', href: 'https://blog.axieinfinity.com/p/axiepals' },
    ],
  },
  {
    role: 'React Native Front-End Developer',
    company: 'LetsFlip and Scorecampus (Startup)',
    dates: '2020 – 2023',
    location: 'Remote',
    bullets: [
      'Tamed undocumented React Native legacy code (v0.57) and upgraded it to v0.68.5 — 12 minor versions and 1 major version on the Play Store.',
      'Bridged the language gap between Indonesian devs and Singaporean management.',
      'Created multiple websites: Getletsflip, Scorecampus, EducationSuperheroes, TheNextLevel.',
    ],
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.lets_flip&pli=1' },
      { label: 'Scorecampus', href: 'https://www.scorecampus.com/' },
    ],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    title: 'Stem Cell Confluency Detection',
    context: 'AI Engineer · 2026',
    note: 'Applied the open-source Cellpose model with CLAHE preprocessing to detect stem cell density in petri dishes, removing subjectivity from the process. Hardest part: preprocessing to fix blurriness and uneven illumination.',
    tech: ['Python', 'Cellpose', 'Computer Vision', 'CLAHE'],
    github: 'https://github.com/rif42/phantast-py-stem-cell-confluency',
  },
  {
    title: 'QR Presence System',
    context: 'Lead AI Engineer · APU',
    note: 'QR-based attendance system with a minimal, customized architecture. Live in production at Agung Putra University.',
    tech: ['TypeScript', 'PostgreSQL', 'QR'],
    github: 'https://github.com/rif42/absen-qr',
    live: 'https://apu.ac.id/',
    liveLabel: 'apu.ac.id',
  },
  {
    title: 'SolutionBank Platform',
    context: 'PM & Fullstack · HandymanKiosk',
    note: 'Marketplace for homeowners to book local handymen — React Native + Django + PostgreSQL + Tamagui, Stripe integration with custom cut, built agentic-first from PRD to deploy.',
    tech: ['React Native', 'Django', 'PostgreSQL', 'Tamagui', 'Stripe'],
    github: 'https://github.com/solution-bank/solutionbank-mobile',
  },
];

export const otherProjects: ProjectItem[] = [
  {
    title: 'Spotify Playlist Clustering',
    context: 'University · 2023',
    note: 'Clustered Spotify songs by audio parameters to determine “likeness”, with a YouTube tutorial for students.',
    tech: ['Python', 'Data Science'],
    github: 'https://github.com/rif42/Spotify_Playlist_Clustering',
    tutorial: 'https://youtu.be/ytznizNZMQI',
  },
  {
    title: 'Bengkel Koding — Associate Data Scientist Course',
    context: 'University · 2023',
    note: 'A full-semester university-backed course (2 credit units) preparing students for Associate Data Scientist certification.',
    tech: ['Python', 'Teaching'],
    github: 'https://github.com/rif42/AssociateDataScientist',
  },
  {
    title: 'Agung Putra University Main Page',
    context: 'Lead Engineer · 2025–2026',
    note: 'Designed, coded, and deployed the university main page.',
    tech: ['Web', 'Production'],
    live: 'https://apu.ac.id/',
    liveLabel: 'apu.ac.id',
  },
];

export const teachingRows = [
  {
    org: 'Timedoor Academy',
    role: 'Programming Mentor',
    proof: '500+ sessions · Teacher of the Year (MENA)',
    href: 'https://www.youtube.com/watch?v=0p3CLpqwdzU',
    hrefLabel: 'teaching sample',
  },
  {
    org: 'LeWagon',
    role: 'AI & Automation Teacher',
    proof: 'make.com · n8n · OpenAI tooling',
    href: 'http://make.com',
    hrefLabel: 'make.com',
  },
  {
    org: 'Agung Putra University',
    role: 'AI Lecturer',
    proof: 'SoTA-paper-based materials · devs to 150% efficiency',
    href: 'https://apu.ac.id/',
    hrefLabel: 'apu.ac.id',
  },
  {
    org: 'Cetta English',
    role: 'English Teacher',
    proof: 'All ages · TOEFL 647 · TOEIC 970',
  },
];
