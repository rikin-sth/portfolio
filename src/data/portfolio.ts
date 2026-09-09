// ---------------------------------------------------------------------------
// Portfolio content
// ---------------------------------------------------------------------------
// This file is the single source of truth for all text content on the site.
// Everything here is drawn directly from Rikin's resume. Fields left as
// empty strings are intentional placeholders (TODO) for information that
// was not available on the resume — fill them in rather than the code.
// ---------------------------------------------------------------------------

export const personal = {
  name: 'Rikin Bahadur Shrestha',
  title: 'Full-Stack Software Engineer',
  location: 'Open to relocation',
  workAuth: 'Authorized to work in the U.S.',
  email: 'rikin48shrestha@gmail.com',
  phone: '507-351-3261',
  // TODO: confirm exact profile URLs — resume lists these as short handles.
  linkedin: 'https://linkedin.com/in/rikin-shrestha',
  github: 'https://github.com/Rikin148',
  resumeUrl: '/resume.pdf',
  summary:
    'Full-stack software engineer with hands-on experience building production tools in React, Node.js, FastAPI, and PostgreSQL at Projxon, and a research background in applied machine learning — including a co-authored paper accepted at IEEE ICECET 2026.',
}

export const about = {
  paragraphs: [
    "I build full-stack systems end to end — from the database schema up through the interface a team actually uses every day. At Projxon, that has meant owning features across two internal platforms, from calendar-based milestone tracking to role-based support dashboards now used across every department in the company.",
    "Before that, I spent close to three years on the research side, running gradient-boosted models against real-world text data to detect cyberbullying — work that turned into a co-authored paper accepted at IEEE ICECET 2026 and a presentation at NCUR. That background shaped how I approach product engineering: I care about the data underneath a feature as much as the interface on top of it.",
    "I'm finishing a BS in Computer Information Technology at Minnesota State University, Mankato, with a certificate in Graphic Design — which is part of why the engineering work and the visual design of a product both matter to me.",
  ],
  highlights: [
    { label: 'Focus', value: 'Full-stack web platforms & applied ML' },
    { label: 'Currently', value: 'Application Developer Intern, Projxon' },
    { label: 'Graduating', value: 'Dec. 2026' },
  ],
}

export type ExperienceEntry = {
  id: string
  company: string
  role: string
  start: string
  end: string
  summary: string
  bullets: string[]
  stack: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'projxon',
    company: 'Projxon',
    role: 'Application Developer Intern',
    start: 'May 2026',
    end: 'Present',
    summary:
      'Core developer on two internal platforms — OrkaMIP, an intern management and milestone-tracking system, and OrkaSupport, a company-wide support ticketing platform — building full-stack features end-to-end.',
    bullets: [
      "Took primary ownership of OrkaMIP's development within a small team, building its calendar-based progress tracking and milestone views for interns and managers; usage scales with the company's active intern headcount.",
      'Replaced a fully manual, spreadsheet-based ticketing process by building OrkaSupport per company requirements, introducing role-based dashboards and real-time status tracking now used across all 7 departments and 40+ teams.',
      'Integrated REST APIs across both platforms to ensure consistent, role-based experiences for interns and department leads.',
    ],
    stack: ['React.js', 'Node.js', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'aims',
    company: 'AIMS Research, MSU',
    role: 'Research Assistant',
    start: 'Jun. 2023',
    end: 'Apr. 2026',
    summary:
      'Built and benchmarked NLP text-classification pipelines for cyberbullying detection across two Kaggle datasets, co-authoring a paper accepted at IEEE ICECET 2026.',
    bullets: [
      'Built and evaluated NLP text classification pipelines across two Kaggle datasets (~160K and ~17K samples) using supervised learning models, assessed with F1 and ROC-AUC metrics.',
      'Benchmarked three gradient boosting models (XGBoost, LightGBM, CatBoost) with cross-validation on a TF-IDF-based pipeline, achieving up to 96% accuracy and an F1 score of 0.74 on the larger dataset — the first published results on these datasets for cyberbullying detection.',
      'Co-authored a published paper on ML-based cyberbullying detection, accepted for publication at IEEE ICECET 2026, and presented findings at the National Conference on Undergraduate Research (NCUR).',
    ],
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'NLP', 'TF-IDF', 'Pandas'],
  },
]

export type ProjectEntry = {
  id: string
  title: string
  date: string
  tagline: string
  role: string
  bullets: string[]
  stack: string[]
  github: string
  demo: string
  visual: 'design-patterns' | 'database' | 'mern'
}

export const projects: ProjectEntry[] = [
  {
    id: 'space-shooter',
    title: '2D Space Shooter',
    date: 'Apr. 2026',
    tagline: 'A shoot-em-up architected entirely around software design patterns.',
    role: 'Solo developer',
    bullets: [
      'Architected the game around 11 software design patterns, including State (player lifecycle), Strategy (enemy movement), Factory and Prototype (enemy creation), Facade (level orchestration), Command (input actions), and Observer (UI reactivity), for a fully decoupled, extensible architecture.',
      'Built a custom object-pooling system for player and enemy projectiles to eliminate per-shot instantiation overhead and sustain stable frame rates during heavy-fire combat.',
    ],
    stack: ['Unity', 'C#', 'OOP', 'Design Patterns'],
    // TODO: add repository / demo links
    github: '',
    demo: '',
    visual: 'design-patterns',
  },
  {
    id: 'internship-dbms',
    title: 'Internship Database Management System',
    date: 'Mar. 2026',
    tagline: 'A normalized relational schema built to hold up under real query load.',
    role: 'Solo developer',
    bullets: [
      'Designed a relational database schema applying normalization to reduce redundancy and improve structural integrity.',
      'Optimized SQL queries and indexing strategies to improve query performance and reduce server load.',
    ],
    stack: ['SQL', 'Normalization', 'Query Optimization', 'Indexing'],
    github: '',
    demo: '',
    visual: 'database',
  },
  {
    id: 'srms',
    title: 'Service Request Management System',
    date: 'Dec. 2025',
    tagline: 'A MERN platform for creating, tracking, and resolving service requests by role.',
    role: 'Frontend lead & workflow design',
    bullets: [
      'Planned the application workflow and led frontend development of a MERN-based service request platform, designing the CRUD flows and access model for creating, viewing, updating, and managing requests.',
      'Built a responsive React interface with role-based access control, tailoring views by user type.',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'RBAC'],
    github: '',
    demo: '',
    visual: 'mern',
  },
]

export const research = {
  title: 'Cyberbullying Detection Across Unequal Datasets',
  subtitle: 'A Gradient Boosting Model Comparison',
  venue: 'IEEE ICECET 2026',
  presentedAt: 'National Conference on Undergraduate Research (NCUR)',
  problem:
    'Cyberbullying-detection research is typically evaluated on a single dataset, which makes it unclear how models trained for the task actually generalize across differently sized, differently balanced sources of real text.',
  approach:
    'Built and evaluated NLP text-classification pipelines across two Kaggle datasets (~160K and ~17K samples), using a TF-IDF-based pipeline feeding three gradient boosting models — XGBoost, LightGBM, and CatBoost — benchmarked with cross-validation.',
  outcome:
    'Achieved up to 96% accuracy and an F1 score of 0.74 on the larger dataset — the first published results on these datasets for cyberbullying detection.',
  metrics: [
    { label: 'Datasets benchmarked', value: '2' },
    { label: 'Combined samples', value: '~177K' },
    { label: 'Models compared', value: '3' },
    { label: 'Peak accuracy', value: '96%' },
    { label: 'F1 score (larger set)', value: '0.74' },
  ],
  pipeline: ['Raw text (Kaggle)', 'TF-IDF vectorization', 'XGBoost / LightGBM / CatBoost', 'Cross-validation', 'F1 & ROC-AUC evaluation'],
}

export const skills = {
  groups: [
    {
      title: 'Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'C#', 'C++', 'R'],
    },
    {
      title: 'Frontend & Backend',
      items: ['React.js', 'Tailwind CSS', 'CSS', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
    },
    {
      title: 'Databases & Cloud',
      items: ['PostgreSQL', 'MongoDB', 'SQL', 'AWS', 'Git', 'CI/CD Pipelines'],
    },
    {
      title: 'Machine Learning & Data',
      items: ['Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'NLP', 'TF-IDF', 'Pandas', 'NumPy'],
    },
  ],
}

export const education = {
  school: 'Minnesota State University, Mankato',
  degree: 'BS in Computer Information Technology',
  certificate: 'Certificate in Graphic Design',
  start: 'Jan. 2022',
  end: 'Dec. 2026',
  coursework: ['Web/App Development', 'Networking', 'Cloud Systems', 'Databases', 'Machine Learning'],
}

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', status: 'In Progress' },
  { name: 'Full-Stack Web Development with MERN Stack', status: 'Aug. 2025' },
]

export const publications = [
  {
    title: 'Cyberbullying Detection Across Unequal Datasets: A Gradient Boosting Model Comparison',
    venue: 'IEEE ICECET 2026',
  },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Selected Work' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
