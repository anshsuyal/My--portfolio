export const about = {
  intro:
    'Aspiring Software Engineer with a strong interest in Full Stack Development. Currently focused on mastering JavaScript, React.js, Node.js, Express.js, and MongoDB while building real-world projects that emphasize performance, scalability, and clean architecture.',
  goals:
    'I enjoy turning practical product ideas into clean, scalable interfaces and production-ready backends. My current focus is React, Node.js, Express.js, MongoDB, and cloud deployment workflows.',
  highlights: ['MERN stack development', 'Real-time apps with Socket.io', 'JWT auth & REST APIs'],
} as const

export const SITE = {
  name: 'Ansh Suyal',
  role: 'Full Stack Developer',
  tagline:
    'I build scalable MERN stack applications with secure APIs, responsive interfaces, and real-time product experiences.',
  email: 'sharmaansh9386@gmail.com',
  phone: '+91-9467497707',
  location: 'Dehradun, Uttarakhand',
  resumeUrl: '/Ansh_Sharma_Resume_doc.docx',
  formEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT ?? '',
  social: {
    github: 'https://github.com/anshsuyal',
    linkedin: 'https://www.linkedin.com/in/ansh-sharma-14072005w22',
    twitter: 'https://twitter.com',
  },
} as const

export type ProjectCategory = 'all' | 'web' | 'fullstack' | 'realtime'

export type Project = {
  id: string
  title: string
  description: string
  image: string
  stack: string[]
  github: string
  live: string
  category: Exclude<ProjectCategory, 'all'>
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Real-Time Chat Application',
    description:
      'A production-ready chat platform with instant messaging, JWT authentication, image sharing through Cloudinary, and Render deployment with MongoDB Atlas.',
    image:
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=80',
    stack: ['React.js', 'Redux Toolkit', 'Node.js', 'Socket.io', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/anshsuyal/ChatApplication.git',
    live: '#contact',
    category: 'realtime',
  },
  {
    id: '2',
    title: 'Job Portal & Professional Network',
    description:
      'A MERN job portal with professional profiles, job posts, applications, content feeds, likes, comments, image uploads, and real-time notifications.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
    github: 'https://github.com/anshsuyal/job-portal.git',
    live: '#contact',
    category: 'fullstack',
  },
  {
    id: '3',
    title: 'Ai-assitence',
    description:
      'Managed the official NSS website, shipped event and announcement pages, resolved technical bugs, and improved content flow for 5,000+ monthly visitors.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    stack: ['React.js', 'node js', 'CSS3', 'JavaScript', 'mongodb' , 'express js', 'gemini api' , 'Authentication jwt ' , 'cloudinary'],
    github: 'https://github.com/anshsuyal/Ai-Assistanent.git',
    live: '#experience',
    category: 'web',
  },
]

export const skillCategories = [
  {
    key: 'languages',
    label: 'Languages',
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'C++ / Java', level: 78 },
      { name: 'Python / SQL', level: 76 },
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React.js / Next.js', level: 88 },
      { name: 'Redux Toolkit', level: 84 },
      { name: 'Tailwind CSS / HTML / CSS', level: 90 },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    items: [
      { name: 'Node.js / Express.js', level: 86 },
      { name: 'RESTful APIs', level: 88 },
      { name: 'JWT Authentication', level: 84 },
    ],
  },
  {
    key: 'database',
    label: 'Database & Cloud',
    items: [
      { name: 'MongoDB / Atlas', level: 86 },
      { name: 'MySQL', level: 74 },
      { name: 'Render / Cloudinary', level: 80 },
    ],
  },
  {
    key: 'tools',
    label: 'Tools & Concepts',
    items: [
      { name: 'Git / GitHub / Postman', level: 86 },
      { name: 'CRUD / MVC Pattern', level: 84 },
      { name: 'Agile / Web Security', level: 78 },
    ],
  },
] as const

export const experience = [
  {
    id: 'e1',
    title: 'Web Developer - IT Cell Intern',
    org: 'NSS (National Service Scheme)',
    period: 'Nov 2023 - Nov 2024',
    description:
      'Managed and maintained the official NSS website in Dehradun, ensuring reliable uptime, accurate content updates, and smoother navigation for 5,000+ monthly visitors.',
    achievements: [
      'Developed event and announcement pages, reducing content turnaround time by 40%',
      'Resolved 20+ technical bugs and improved usability through regular reviews',
      'Improved average session duration and engagement by 25% through better content layout',
    ],
  },
  {
    id: 'e2',
    title: 'Bachelor of Computer Applications',
    org: 'Graphic Era Hill University',
    period: 'Jun 2023 - Jun 2026',
    description:
      'Pursuing BCA with a strong foundation in programming, databases, software engineering, and full-stack web development.',
    achievements: ['Current CGPA: 8.11 / 10', 'Coursework aligned with web development and data fundamentals'],
  },
] as const

export const certifications = [
  { name: 'Ethical Hacking & Bug Bounty', issuer: 'Indian Cyber Clubs', year: '2024' },
  { name: 'C++ Programming', issuer: 'SWAYAM (NPTEL)', year: '2024' },
] as const

export const services = [
  {
    title: 'MERN Web Apps',
    description: 'Full-stack product builds with React, Node.js, Express.js, MongoDB, routing, auth, and deployment.',
    icon: 'stack' as const,
  },
  {
    title: 'Responsive UI Development',
    description: 'Clean, mobile-first interfaces with Tailwind CSS, reusable components, and polished interaction states.',
    icon: 'palette' as const,
  },
  {
    title: 'API Development',
    description: 'RESTful APIs with secure JWT authentication, CRUD workflows, validation, and maintainable MVC structure.',
    icon: 'api' as const,
  },
  {
    title: 'Real-Time Features',
    description: 'Socket.io messaging, notifications, live interactions, and media sharing flows for modern web apps.',
    icon: 'ai' as const,
  },
  {
    title: 'Website Maintenance',
    description: 'Bug fixes, content updates, performance checks, Git-based workflows, and practical production support.',
    icon: 'code' as const,
  },
] as const

export const testimonials = [
  {
    id: 't1',
    quote: 'Maintained 100% uptime for an active public website serving 5,000+ monthly visitors.',
    name: 'NSS Website',
    role: 'Reliability and content operations',
  },
  {
    id: 't2',
    quote: 'Reduced content turnaround time by 40% by developing reusable event and announcement pages.',
    name: 'IT Cell Internship',
    role: 'Frontend delivery and team collaboration',
  },
  {
    id: 't3',
    quote: 'Built real-time product features with Socket.io, JWT auth, MongoDB Atlas, and Cloudinary media uploads.',
    name: 'MERN Projects',
    role: 'Full-stack engineering',
  },
] as const

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const
