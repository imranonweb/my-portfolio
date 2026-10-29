import {
  SiReact, SiNextdotjs, SiTailwindcss,
  SiExpress, SiPostgresql, SiMongodb,
  SiSupabase, SiTypescript, SiJavascript, SiCplusplus,
  SiGit, SiPython, SiScikitlearn, SiPandas, SiStreamlit,
} from 'react-icons/si'

export const profile = {
  name: 'Md. Al Imran Emon',
  short: 'Emon',
  bangla: 'আল ইমরান ইমন',
  handle: 'imranonweb',
  designation: 'Full Stack Developer',
  headline: 'Full-Stack Developer with a growing specialization in Machine Learning',
  photo: '/emon.jpg',
  resume: 'https://drive.google.com/file/d/1JYcqIOtR9mzpSZ4jGnfuvLjT9Qt69HYZ/view?usp=sharing',
  resumeDownload: 'https://drive.google.com/uc?export=download&id=1JYcqIOtR9mzpSZ4jGnfuvLjT9Qt69HYZ',
  email: 'alimranemon93@gmail.com',
  phone: '+8801776824668',
  phoneDisplay: '+880 1776-824668',
  whatsapp: 'https://wa.me/8801776824668',
  githubAvatar: 'https://github.com/imranonweb.png',
  githubUrl: 'https://github.com/imranonweb',
  linkedinUrl: 'https://www.linkedin.com/in/al-imran-emon/',
}

export const roles = [
  'full-stack web applications',
  'MERN & Next.js products',
  'applied machine-learning tools',
  'role-scoped backend systems',
]

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
  { label: 'Primary Focus', text: 'Full-stack web development with React, Next.js, Node.js/Express & MongoDB/PostgreSQL' },
  { label: 'Specialization', text: 'Machine learning workflows, model evaluation & explainable AI in Python' },
  { label: 'Foundation', text: 'Algorithmic problem solving in C++ on Codeforces, CodeChef & LeetCode' },
]

export const skills = [
  {
    category: 'Software Development',
    subtitle: 'Demonstrated across shipped full-stack projects',
    tone: 'marigold',
    items: [
      { name: 'JavaScript (ES6+) & TypeScript', icon: SiTypescript, color: '#4a9dff', note: 'Application logic, async workflows & typed contracts in BazarDor and E-Health' },
      { name: 'React 19 & Next.js', icon: SiReact, color: '#61DAFB', note: 'SPA architecture, React Router v7 & Next.js App Router (Server/Client Components)' },
      { name: 'Node.js, Express & REST APIs', icon: SiExpress, color: '#6cc24a', note: 'Backend routing, authentication flows & API integration' },
      { name: 'PostgreSQL & Supabase', icon: SiPostgresql, color: '#6aa3e8', note: 'Relational schema design, Row-Level Security (RLS) & private storage buckets' },
      { name: 'MongoDB Atlas', icon: SiMongodb, color: '#47c26b', note: 'Document data modelling, aggregation & market price persistence' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', note: 'Responsive layouts, custom design tokens & accessible UI components' },
      { name: 'Git & GitHub', icon: SiGit, color: '#ff6b45', note: 'Version control, branching & deployment workflows' },
    ],
  },
  {
    category: 'Machine Learning & Data',
    subtitle: 'Applied in coursework & ChurnIQ; actively expanding',
    tone: 'magenta',
    items: [
      { name: 'Python', icon: SiPython, color: '#ffd43b', note: 'Data preprocessing, ML pipelines & scripting' },
      { name: 'NumPy & Pandas', icon: SiPandas, color: '#4dabf7', note: 'Exploratory data analysis, feature engineering & tabular data cleaning' },
      { name: 'scikit-learn & XGBoost', icon: SiScikitlearn, color: '#ff9f43', note: 'Supervised classification, class-imbalance handling & stratified CV' },
      { name: 'Model Evaluation & SHAP', icon: SiScikitlearn, color: '#ff6b9d', note: 'ROC-AUC, precision/recall trade-offs & per-prediction SHAP explainability' },
      { name: 'Streamlit', icon: SiStreamlit, color: '#ff6b6b', note: 'Interactive web deployment for machine-learning models' },
      { name: 'Deep Learning & ML Systems', icon: SiPython, color: '#d6cbb7', tag: 'Exploring', note: 'Expanding through university coursework and hands-on experimentation' },
    ],
  },
  {
    category: 'Computer Science Foundations',
    subtitle: 'Core academic & problem-solving background',
    tone: 'teal',
    items: [
      { name: 'C++', icon: SiCplusplus, color: '#4db3ff', note: 'Primary language for algorithmic problem solving and STL data structures' },
      { name: 'Data Structures & Algorithms', icon: SiCplusplus, color: '#2ad4c4', note: 'Graphs, trees, dynamic programming, greedy methods & complexity analysis' },
      { name: 'Object-Oriented Programming', icon: SiJavascript, color: '#ffb92e', note: 'Encapsulation, abstraction & modular software design' },
      { name: 'Database Management (DBMS)', icon: SiPostgresql, color: '#5fa8d8', note: 'Relational modelling, normalization, indexing & access control' },
    ],
  },
]

export const education = [
  {
    school: 'Green University of Bangladesh',
    degree: 'B.Sc. in Computer Science & Engineering',
    meta: '4th year · Expected graduation 2027',
    stamp: { label: 'CGPA', value: '3.54' },
  },
  {
    school: 'Dinajpur Government College',
    degree: 'Higher Secondary Certificate (HSC · Science)',
    meta: 'Completed',
    stamp: { label: 'GPA', value: '5.00' },
  },
]

export const experience = [
  {
    role: 'Programming & Development Secretary (Lead)',
    org: 'Green University Computer Club (GUCC)',
    meta: 'Green University of Bangladesh · Current',
    points: [
      'Leading and Arranging Various Event, Competition and Programming sessions inside the campus.',
      'Maintained and Developed the GUCC official website.',
    ],
  },
]

export const projects = [
  {
    slug: 'bazardor',
    name: 'BazarDor',
    native: 'বাজার দর',
    kind: 'Full-Stack Web App',
    tone: 'marigold',
    image: '/projects/bazardor.png',
    summary: 'Tracks and compares daily essential commodity prices across Bangladeshi markets in a Bangla-first interface.',
    problem:
      'Everyday shoppers in Bangladesh often lack a single, accessible place to check and compare daily retail commodity prices across divisions and market categories.',
    built:
      'Built a Bangla-first full-stack web application using Next.js App Router, TypeScript, and MongoDB Atlas with a live price-change ticker, top risers and fallers, category filtering, division-wise min/max/average rate views, and BetterAuth authentication.',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'DaisyUI', 'BetterAuth', 'MongoDB Atlas'],
    description:
      'BazarDor is a responsive full-stack web application built to track and compare the daily prices of essential commodities across major markets in Bangladesh. Visitors can monitor price changes in a live ticker, inspect top risers and fallers, filter items by category, and compare division-wise minimum, maximum, and average rates. Authentication supports email/password along with Google and GitHub OAuth, paired with user profile management and photo uploads.',
    live: 'https://bazardor-amber.vercel.app',
    github: 'https://github.com/imranonweb/bazardor',
    challenges: [
      'Designed a Bangla-first interface with Bengali numerals and date formatting while keeping numeric sorting accurate across commodity categories.',
      'Structured Next.js App Router boundaries between Server Components for data fetching and Client Components for interactive filtering and authentication.',
      'Integrated BetterAuth with email/password plus Google and GitHub OAuth providers backed by MongoDB Atlas.',
      'Configured reliable connection pooling and schema queries against a MongoDB Atlas replica set.',
    ],
    future: [
      'Historical price trend charts across weeks and months.',
      'User watchlists and price-change notifications for staple commodities.',
      'Expanded coverage of district-level markets and commodity categories.',
      'Offline-ready PWA caching for mobile market checks.',
    ],
  },
  {
    slug: 'customer-churn-prediction',
    name: 'ChurnIQ',
    native: 'Customer Churn Prediction',
    kind: 'Machine Learning & Explainable AI',
    tone: 'magenta',
    image: '/projects/churn.png',
    summary: 'End-to-end telecom customer churn prediction pipeline comparing five classifiers with per-customer SHAP explanations.',
    problem:
      'Predicting customer churn is only useful when retention teams can see both an accurate risk score and the specific factors driving an individual customer to leave.',
    built:
      'Developed an end-to-end Python ML pipeline on the IBM Telco dataset (7,043 records), evaluated five classifiers under stratified cross-validation, and shipped an interactive Streamlit web app that outputs churn probability, risk level, and SHAP feature attributions.',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'Pandas', 'NumPy', 'Streamlit'],
    description:
      'ChurnIQ is an end-to-end machine learning project trained and evaluated on the IBM Telco Customer Churn dataset (7,043 customers). It benchmarks five supervised classifiers (Logistic Regression, Decision Tree, Random Forest, SVM, and XGBoost) using stratified cross-validation and explains individual predictions with SHAP. The model is deployed as an interactive Streamlit application that returns a customer churn probability, a risk tier, and a feature-level explanation.',
    live: 'https://churniqwithai.streamlit.app/',
    github: 'https://github.com/imranonweb/customer-churn-prediction',
    challenges: [
      'Handled the 26.5% churn class imbalance by evaluating cost re-weighting and SMOTE using ROC-AUC, precision, recall, and F1 rather than accuracy alone.',
      'Built leakage-free preprocessing pipelines to handle blank TotalCharges values, feature scaling, and categorical encoding inside cross-validation folds.',
      'Compared five model families systematically with stratified cross-validation to select a well-calibrated classifier.',
      'Translated model outputs into clear per-customer SHAP waterfall explanations inside the Streamlit interface.',
    ],
    future: [
      'Expose the inference pipeline via a FastAPI REST endpoint for external web apps.',
      'Add actionable retention recommendations mapped to top negative SHAP drivers.',
      'Introduce probability calibration curves and data-drift monitoring.',
    ],
  },
  {
    slug: 'ehealth',
    name: 'E-Health',
    native: 'Digital Medical Records',
    kind: 'Full-Stack Healthcare Platform',
    tone: 'teal',
    image: '/projects/ehealth.png',
    summary: 'Unified patient medical record platform with role-scoped access for patients, doctors, diagnostic labs, and hospitals.',
    problem:
      'Patient medical histories are frequently scattered across paper files and isolated clinics, making it hard for doctors and patients to review longitudinal records securely.',
    built:
      'Built a multi-role clinical record web app with React 19, Vite, React Router v7, and Supabase where patients view their chronological health timeline and verified providers issue prescriptions, upload lab reports, and log hospital visits under PostgreSQL Row-Level Security.',
    stack: ['React 19', 'Vite', 'React Router v7', 'Supabase', 'PostgreSQL (RLS)', 'Lucide'],
    description:
      'E-Health provides every patient with a single chronological medical history while enforcing strict, role-scoped permissions for healthcare providers. Patients review their timeline, e-prescriptions, and diagnostic reports; doctors look up patients and issue structured prescriptions; diagnostic centers upload lab results and imaging scans; and hospitals record admissions, consultations, and emergency visits.',
    live: 'https://ehealth-omega.vercel.app',
    github: 'https://github.com/imranonweb/ehealth',
    challenges: [
      'Authored granular PostgreSQL Row-Level Security (RLS) policies in Supabase so patients, doctors, labs, and hospitals only read or write authorized records.',
      'Configured private Supabase Storage buckets with role-checked access policies for medical PDFs and diagnostic scans.',
      'Managed authentication state, role guards, and protected routes across four distinct dashboard workflows.',
      'Designed a unified chronological timeline schema capable of representing consultations, prescriptions, lab uploads, and hospital admissions.',
    ],
    future: [
      'Doctor appointment scheduling and automated follow-up reminders.',
      'Real-time notifications when a lab report or prescription is added.',
      'Exportable patient summaries following standard clinical record formats.',
    ],
  },
]

export const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contests', label: 'CP' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
