import type { Project } from '../types/project'

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Real-Time Chat Application',
    shortDescription: 'A production-ready chat platform with instant messaging and JWT authentication.',
    fullDescription: 'A full-featured real-time chat application built for seamless communication. It supports instant messaging, user authentication, and secure image sharing. The application ensures low-latency updates through WebSockets and is deployed on Render with MongoDB Atlas.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=80',
    stack: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
    features: [
      'Real-time messaging',
      'JWT Authentication',
      'Image sharing',
      'Online status indicators',
      'Responsive design'
    ],
    challenges: [
      'Handling real-time state synchronization across multiple connected clients.',
      'Optimizing image uploads for fast delivery.'
    ],
    solutions: [
      'Implemented Socket.io rooms to broadcast messages only to relevant participants.',
      'Integrated Cloudinary for optimized image storage and delivery.'
    ],
    category: ['realtime', 'fullstack', 'featured'],
    featured: true,
    links: {
      github: 'https://github.com/anshsuyal/ChatApplication',
      live: '#'
    }
  },
  {
    id: '2',
    title: 'Task Scheduler Dashboard',
    shortDescription: 'A clean and efficient task management dashboard.',
    fullDescription: 'An intuitive task scheduler dashboard designed to help users manage their daily tasks efficiently. It features a clean UI, drag-and-drop capabilities, and dynamic task categorization without the need for a complex backend.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1200&q=80',
    stack: ['React.js', 'JavaScript', 'CSS'],
    features: [
      'Task categorization',
      'Drag and drop interface',
      'Progress tracking',
      'Local storage persistence'
    ],
    challenges: [
      'Maintaining complex UI state without a state management library.'
    ],
    solutions: [
      'Used React Context API and custom hooks for robust local state management.'
    ],
    category: ['frontend'],
    featured: false,
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    id: '3',
    title: 'Portfolio Website',
    shortDescription: 'A modern, interactive developer portfolio.',
    fullDescription: 'A highly interactive and visually engaging personal portfolio website built to showcase my projects and skills. It features custom animations, glassmorphism design, and a responsive layout tailored for a premium user experience.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    stack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Smooth scroll animations',
      'Glassmorphism UI',
      'Dark mode design',
      'Fully responsive',
      'SEO optimized'
    ],
    challenges: [
      'Ensuring smooth animations on lower-end devices.'
    ],
    solutions: [
      'Utilized Framer Motion with hardware acceleration and implemented a reduced motion hook for accessibility.'
    ],
    category: ['frontend', 'featured'],
    featured: true,
    links: {
      github: '#',
      live: '#'
    }
  }
]
