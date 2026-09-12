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
  linkedin: 'https://linkedin.com/in/rikin-shrestha',
  github: 'https://github.com/rikin-sth',
  behance: 'https://www.behance.net/rikinshrestha',
  resumeUrl: 'resume.pdf',
  tagline: 'Building with logic. Designing with purpose. Always learning.',
  summary:
    'Full-stack software engineer with hands-on experience building production tools in React, Node.js, FastAPI, and PostgreSQL at Projxon, and a research background in applied machine learning — including a co-authored paper accepted at IEEE ICECET 2026.',
  whoami:
    'Rikin Shrestha — Computer Information Technology graduate with a certificate in Graphic Design, combining technology, development, and design to build practical and creative solutions.',
}

export const about = {
  photo: 'rikin-portrait.jpg',
  paragraphs: [
    'I approach problems with curiosity, exploring different possibilities before committing to a solution. Whether I’m working with code or design, I enjoy thinking outside the box, breaking complex problems into smaller pieces, and finding solutions that are both creative and practical. I value organization and attention to detail because structure gives me the freedom to experiment, learn from mistakes, and improve my work.',
    'My experiences in technology and graphic design have taught me to look at problems from different perspectives. Working in technical support has strengthened my ability to stay calm, adapt, and make decisions when time matters, while design has pushed me to communicate ideas visually and think beyond purely technical solutions. I enjoy bringing these two sides together to create work that is useful, meaningful, and feels like my own.',
    'I’m always looking to push beyond what I already know. I value continuous growth, curiosity, and unfamiliar challenges. I want to keep learning, trying new things, and seeing how far I can push myself.',
  ],
}

export type ExperienceEntry = {
  id: string
  company: string
  location?: string
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
    location: 'Remote',
    role: 'Application Developer Intern',
    start: 'May 2026',
    end: 'Present',
    summary:
      'Core developer on two internal platforms OrkaMIP, an intern management and milestone-tracking system, and OrkaSupport, a company-wide support ticketing platform, building full-stack features end-to-end.',
    bullets: [
      "Took primary ownership of OrkaMIP's development within a small team, building its calendar-based progress tracking and milestone views for interns and managers; usage scales with the company's active intern headcount.",
      'Replaced a fully manual, spreadsheet-based ticketing process by building OrkaSupport per company requirements, introducing role-based dashboards and real-time status tracking now used across all 7 departments and 40+ teams.',
      'Integrated REST APIs across both platforms to ensure consistent, role-based experiences for interns and department leads.',
    ],
    stack: ['React.js', 'Node.js', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'classroom-support',
    company: 'IT Solutions Center',
    location: 'Minnesota State University, Mankato',
    role: 'Classroom Support Technician',
    start: 'June 2023',
    end: 'December 2026',
    summary:
      'Keep AV and classroom technology running across campus from setup to real-time troubleshooting during live classes.',
    bullets: [
      'Set up and configured AV systems like TVs, projectors, microphones, Zoom devices, and speakers, ensuring full functionality before class.',
      'Maintained and supported classroom AV technology across 200+ classrooms campus-wide, delivering real-time troubleshooting for faculty and students to minimize lecture disruptions.',
      'For critical failures, applied temporary workarounds to keep classes running, then followed up with permanent fixes.',
      'Monitored recurring issues and implemented long-term solutions to reduce repeat support calls.',
    ],
    stack: ['AV Systems', 'Zoom Rooms', 'Hardware Deployment', 'Troubleshooting', 'IT Support'],
  },
  {
    id: 'aims',
    company: 'AIMS Research',
    location: 'Minnesota State University, Mankato',
    role: 'Research Assistant',
    start: 'June 2023',
    end: 'April 2026',
    summary:
      'Built and benchmarked NLP text-classification pipelines for cyberbullying detection across two Kaggle datasets, co-authoring a paper accepted at IEEE ICECET 2026.',
    bullets: [
      'Built and evaluated NLP text classification pipelines across two Kaggle datasets (~160K and ~17K samples) using supervised learning models, assessed with F1 and ROC-AUC metrics.',
      'Benchmarked three gradient boosting models (XGBoost, LightGBM, CatBoost) with cross-validation on a TF-IDF-based pipeline, achieving up to 96% accuracy and an F1 score of 0.74 on the larger dataset being the first published results on these datasets for cyberbullying detection.',
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
  image?: string
}

export const projects: ProjectEntry[] = [
  {
    id: 'space-shooter',
    title: '2D Space Shooter',
    date: 'Apr. 2026',
    tagline: 'A Unity shoot-em-up built around software design patterns.',
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
    image: 'projects/space-shooter.png',
  },
  {
    id: 'internship-dbms',
    title: 'Internship Database Management System',
    date: 'Mar. 2026',
    tagline: 'A relational database for internship data with a normalized schema and optimized queries.',
    role: 'Solo developer',
    bullets: [
      'Designed a relational database schema applying normalization to reduce redundancy and improve structural integrity.',
      'Optimized SQL queries and indexing strategies to improve query performance and reduce server load.',
    ],
    stack: ['SQL', 'Normalization', 'Query Optimization', 'Indexing'],
    github: '',
    demo: '',
    visual: 'database',
    image: 'projects/internship-dbms.png',
  },
  {
    id: 'srms',
    title: 'Service Request Management System',
    date: 'Dec. 2025',
    tagline: 'A MERN app for creating, tracking, and managing service requests by role.',
    role: 'Frontend lead & workflow design',
    bullets: [
      'Planned the application workflow and led frontend development of a MERN-based service request platform, designing the CRUD flows and access model for creating, viewing, updating, and managing requests.',
      'Built a responsive React interface with role-based access control, tailoring views by user type.',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'RBAC'],
    github: '',
    demo: '',
    visual: 'mern',
    image: 'projects/srms.png',
  },
]

export const research = {
  title: 'Cyberbullying Detection Across Unequal Datasets',
  subtitle: 'A Gradient Boosting Model Comparison',
  authors: 'Rikin Shrestha, Rushit Dave, Mansi Bhavsar',
  venue: 'IEEE ICECET 2026',
  doi: '10.1109/ICECET65726.2026.11632939',
  paperUrl: 'https://ieeexplore.ieee.org/document/11632939',
  journalUrl: 'https://www.scirp.org/journal/paperinformation?paperid=140088',
  presentedAt: '2026 IEEE ICECET, Rome, Italy (July 2026)',
  problem:
    'Cyberbullying-detection research is typically evaluated on a single dataset, which makes it unclear how models trained for the task actually generalize across differently sized, differently balanced sources of real text.',
  approach:
    'Built and evaluated NLP text-classification pipelines across two Kaggle datasets (~160K and ~17K samples), using a TF-IDF-based pipeline feeding three gradient boosting models; XGBoost, LightGBM, and CatBoost, benchmarked with cross-validation.',
  outcome:
    'Achieved up to 96% accuracy and an F1 score of 0.74 on the larger dataset being the first published results on these datasets for cyberbullying detection.',
  metrics: [
    { label: 'Datasets benchmarked', value: '2' },
    { label: 'Combined samples', value: '~177K' },
    { label: 'Models compared', value: '3' },
    { label: 'Peak accuracy', value: '96%' },
    { label: 'F1 score (larger set)', value: '0.74' },
  ],
  pipeline: ['Raw text (Kaggle)', 'TF-IDF vectorization', 'XGBoost / LightGBM / CatBoost', 'Cross-validation', 'F1 & ROC-AUC evaluation'],
}

export const journalPaper = {
  title: 'Machine Learning for Identifying Harmful Online Behavior: A Cyberbullying Overview',
  authors: 'Rikin Shrestha, Rushit Dave',
  venue: 'Journal of Computer and Communications',
  citation: 'Vol. 13, pp. 26–40 (2025)',
  doi: '10.4236/jcc.2025.131003',
  url: 'https://www.scirp.org/journal/paperinformation?paperid=140088',
  presentedAt: 'National Conference on Undergraduate Research (NCUR)',
  photo: 'research/ncur.jpg',
  summary:
    'A literature review surveying how machine learning is used to detect cyberbullying across text, images, and multimodal content covering NLP, CNNs, LSTMs, OCR, SVM, and Naïve Bayes approaches and the open challenges around sarcasm, multilingual text, and real-time detection that still limit real-world systems.',
}

export const skills = {
  groups: [
    {
      title: 'Programming Languages',
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

export const spokenLanguages = ['English', 'Nepali', 'Hindi', 'Newari']

export const education = {
  school: 'Minnesota State University, Mankato',
  degree: 'BS in Computer Information Technology',
  bachelor: 'Bachelor of Science',
  major: 'Computer Information Technology',
  certificate: 'Certificate in Graphic Design',
  certificateShort: 'Graphic Design',
  start: 'Jan. 2022',
  end: 'Dec. 2026',
  graduated: 'December 2026',
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
    url: 'https://ieeexplore.ieee.org/document/11632939',
  },
  {
    title: 'Machine Learning for Identifying Harmful Online Behavior: A Cyberbullying Overview',
    venue: 'Journal of Computer and Communications',
    url: 'https://www.scirp.org/journal/paperinformation?paperid=140088',
    secondary: true,
  },
]

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Connect' },
]
