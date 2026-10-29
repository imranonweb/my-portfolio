import {
  SiReact, SiNextdotjs, SiRedux, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiMongodb,
  SiSupabase, SiGraphql, SiTypescript, SiJavascript, SiMysql, SiCplusplus,
  SiGit, SiDocker, SiVercel, SiPython, SiScikitlearn, SiPandas, SiStreamlit,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export const profile = {
  name: 'Md. Al Imran Emon',
  short: 'Emon',
  bangla: 'আল ইমরান ইমন',
  handle: 'imranonweb',
  designation: 'Full Stack Developer',
  photo: '/emon.jpg',
  resume: 'https://drive.google.com/file/d/1JYcqIOtR9mzpSZ4jGnfuvLjT9Qt69HYZ/view?usp=sharing',
  resumeDownload: 'https://drive.google.com/uc?export=download&id=1JYcqIOtR9mzpSZ4jGnfuvLjT9Qt69HYZ',
  email: 'alimranemon93@gmail.com',
  phone: '+8801776824668',
  whatsapp: 'https://wa.me/8801776824668',
  githubAvatar: 'https://github.com/imranonweb.png',
  githubUrl: 'https://github.com/imranonweb',
}

export const roles = ['MERN stack web apps', 'scalable full-stack systems', 'applied ML & AI solutions', 'fast, accessible interfaces']

export const socials = [
  { name: 'GitHub', url: 'https://github.com/imranonweb', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/al-imran-emon/', icon: 'linkedin' },
  { name: 'Facebook', url: 'https://www.facebook.com/imranonweb1/', icon: 'facebook' },
  { name: 'Codeforces', url: 'https://codeforces.com/profile/imranonweb', icon: 'codeforces' },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/imranonweb', icon: 'codechef' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/imranonweb/', icon: 'leetcode' },
]

export const platforms = [
  { key: 'codeforces', name: 'Codeforces', url: socials[3].url, color: '#2ad4c4' },
  { key: 'codechef', name: 'CodeChef', url: socials[4].url, color: '#ffb92e' },
  { key: 'leetcode', name: 'LeetCode', url: socials[5].url, color: '#ff8a3d' },
]

export const currently = [
  { label: 'Focus', text: 'Full-stack web development with the MERN stack & Next.js' },
  { label: 'Learning', text: 'Machine Learning, predictive modelling & AI-driven systems' },
  { label: 'Foundation', text: 'Data Structures & Algorithms in C++ on Codeforces & CodeChef' },
]

export const skills = [
  {
    category: 'Frontend Engineering',
    tone: 'marigold',
    items: [
      { name: 'React 19', icon: SiReact, color: '#61DAFB', grade: 'Core', level: 5, evidence: 'Component architecture, custom hooks & E-Health SPA' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E', grade: 'Core', level: 5, evidence: 'Async runtime, DOM & full-stack MERN applications' },
      { name: 'Next.js (App Router)', icon: SiNextdotjs, color: '#f7eddb', grade: 'Production', level: 4, evidence: 'Server/Client Components & BazarDor platform' },
      { name: 'TypeScript', icon: SiTypescript, color: '#4a9dff', grade: 'Production', level: 4, evidence: 'Typed API contracts & end-to-end safety' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', grade: 'Core', level: 5, evidence: 'Design tokens, responsive layouts & dark UI systems' },
      { name: 'Redux', icon: SiRedux, color: '#9d7bff', grade: 'Working', level: 3, evidence: 'Predictable client state management' },
    ],
  },
  {
    category: 'Backend & Databases (MERN)',
    tone: 'teal',
    items: [
      { name: 'Node.js & Express.js', icon: SiExpress, color: '#6cc24a', grade: 'Core', level: 5, evidence: 'REST APIs, auth middleware & full-stack server routing' },
      { name: 'MongoDB Atlas', icon: SiMongodb, color: '#47c26b', grade: 'Production', level: 4, evidence: 'Document schemas, replica sets & market price persistence' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#6aa3e8', grade: 'Production', level: 4, evidence: 'Row-Level Security & relational clinical records' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', grade: 'Production', level: 4, evidence: 'Auth, role guards & private document storage' },
      { name: 'Prisma ORM', icon: SiPrisma, color: '#9fb1d6', grade: 'Working', level: 3, evidence: 'Type-safe database queries & schema migrations' },
      { name: 'GraphQL', icon: SiGraphql, color: '#ff3fb0', grade: 'Working', level: 3, evidence: 'Typed schemas, queries & resolvers' },
    ],
  },
  {
    category: 'Machine Learning & AI',
    tone: 'magenta',
    items: [
      { name: 'Python', icon: SiPython, color: '#ffd43b', grade: 'Production', level: 4, evidence: 'ML workflows, data pipelines & model evaluation' },
      { name: 'scikit-learn & XGBoost', icon: SiScikitlearn, color: '#ff9f43', grade: 'Production', level: 4, evidence: '5-classifier churn benchmark & stratified CV' },
      { name: 'Pandas & NumPy', icon: SiPandas, color: '#4dabf7', grade: 'Production', level: 4, evidence: 'Feature engineering, EDA & leakage-free preprocessing' },
      { name: 'Streamlit & SHAP', icon: SiStreamlit, color: '#ff6b6b', grade: 'Production', level: 4, evidence: 'Explainable AI deployment (ChurnIQ web app)' },
    ],
  },
  {
    category: 'Core CS, Languages & DevOps',
    tone: 'vermilion',
    items: [
      { name: 'C++ (DSA & CP)', icon: SiCplusplus, color: '#4db3ff', grade: 'Core', level: 5, evidence: 'STL, graph algorithms & rated competitive programming' },
      { name: 'SQL', icon: SiMysql, color: '#5fa8d8', grade: 'Production', level: 4, evidence: 'Relational schemas, joins & query optimization' },
      { name: 'Git & GitHub', icon: SiGit, color: '#ff6b45', grade: 'Core', level: 5, evidence: 'Version control across 48+ public repositories' },
      { name: 'Vercel & Cloud', icon: SiVercel, color: '#f7eddb', grade: 'Production', level: 4, evidence: 'Edge deployments, serverless functions & CI' },
      { name: 'Docker', icon: SiDocker, color: '#3aa0ff', grade: 'Working', level: 3, evidence: 'Containerized services & reproducible builds' },
      { name: 'Java', icon: FaJava, color: '#ff9f3a', grade: 'Working', level: 3, evidence: 'OOP & socket-based P2P file transfer' },
    ],
  },
]

export const education = [
  {
    school: 'Green University of Bangladesh',
    degree: 'B.Sc. in Computer Science & Engineering',
    meta: '4th year · expected graduation 2027',
    stamp: { label: 'CGPA', value: '3.54' },
  },
  {
    school: 'Dinajpur Government College',
    degree: 'Higher Secondary Certificate (HSC)',
    meta: 'Completed',
    stamp: { label: 'GPA', value: '5.00' },
  },
]

export const experience = [
  {
    role: 'Programming Lead',
    org: 'Green University Computer Club (GUCC)',
    meta: 'Current role',
    points: [
      'Lead the club’s programming and development activities.',
      'Build real-world projects and help members grow through problem solving and competitive programming.',
    ],
  },
]

export const projects = [
  {
    slug: 'bazardor',
    name: 'BazarDor',
    native: 'বাজার দর',
    kind: 'Full-stack web app',
    tone: 'marigold',
    image: '/projects/bazardor.png',
    summary: 'Daily commodity prices across Bangladeshi markets, in a Bangla-first interface.',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'DaisyUI', 'BetterAuth', 'MongoDB Atlas'],
    description:
      'BazarDor is a responsive full-stack web app for tracking and comparing the daily prices of essential commodities across major markets in Bangladesh. Visitors watch live price changes in a ticker, see the top risers and fallers, filter by category and open division-wise minimum, maximum and average rates. Sign-in supports email and password, Google and GitHub, and users can manage a profile with a photo upload.',
    live: 'https://bazardor-amber.vercel.app',
    github: 'https://github.com/imranonweb/bazardor',
    challenges: [
      'Delivering a truly Bangla-first experience: Bengali numerals and dates, and numeric sorting inside categories.',
      'Wiring up secure authentication with BetterAuth plus Google and GitHub OAuth.',
      'Deciding between Server and Client Components in the Next.js App Router.',
      'Connecting reliably to a MongoDB Atlas replica set.',
    ],
    future: [
      'Historical price charts and trend analysis.',
      'Price alerts and favourite commodities per user.',
      'More markets, districts and commodity categories.',
      'Installable PWA with offline support.',
    ],
  },
  {
    slug: 'customer-churn-prediction',
    name: 'ChurnIQ',
    native: 'Customer Churn Prediction',
    kind: 'Machine learning',
    tone: 'magenta',
    image: '/projects/churn.png',
    summary: 'Predicts telecom customer churn and explains every prediction with SHAP.',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'Streamlit', 'Jupyter'],
    description:
      'An end-to-end machine learning project that predicts telecom customer churn on the IBM Telco dataset of 7,043 customers. It compares five classifiers (Logistic Regression, Decision Tree, Random Forest, SVM and XGBoost) with stratified cross-validation and explains each prediction with SHAP. It ships as an interactive Streamlit app that returns a churn probability, a risk category and a per-customer explanation.',
    live: 'https://churniqwithai.streamlit.app/',
    github: 'https://github.com/imranonweb/customer-churn-prediction',
    challenges: [
      'Class imbalance: only 26.5% of customers churn, so accuracy alone is misleading.',
      'Leakage-free preprocessing and handling blank TotalCharges values.',
      'Comparing cost re-weighting against SMOTE fairly with cross-validation.',
      'Making black-box predictions understandable with SHAP explanations.',
    ],
    future: [
      'Expose the model through a REST API.',
      'Recommend a retention action for each at-risk customer.',
      'Test on more datasets and add model monitoring.',
      'Hyperparameter tuning and probability calibration.',
    ],
  },
  {
    slug: 'ehealth',
    name: 'E-Health',
    native: 'Digital Medical Records',
    kind: 'Full-stack web app',
    tone: 'teal',
    image: '/projects/ehealth.png',
    summary: 'One lifetime medical record for patients, with role-scoped access for doctors, labs and hospitals.',
    stack: ['React 19', 'Vite', 'React Router v7', 'Supabase', 'PostgreSQL (RLS)', 'Lucide'],
    description:
      'E-Health gives every patient a single chronological medical history and gives verified providers strict, role-scoped capabilities. Patients view their timeline, prescriptions and reports; doctors search patients and issue e-prescriptions; diagnostic centres upload lab reports and scans; hospitals record admissions, consultations and emergencies.',
    live: 'https://ehealth-omega.vercel.app',
    github: 'https://github.com/imranonweb/ehealth',
    challenges: [
      'Designing role-scoped Row Level Security policies in PostgreSQL.',
      'Securing private medical document storage.',
      'Handling session persistence and token management with Supabase Auth.',
      'Modelling one lifetime timeline across four different provider roles.',
    ],
    future: [
      'Appointment booking and reminders.',
      'Real-time notifications for new prescriptions and reports.',
      'Health data interoperability standards such as FHIR.',
      'Analytics dashboards and a mobile app.',
    ],
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contests', label: 'Contests' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
