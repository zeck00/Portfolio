import { Project, Experience, Skill, Certification } from '../types';

export const projects: Project[] = [
  {
    id: 'banders-potato-app',
    title: "Bander's Potato App",
    description: 'Full-featured restaurant app with loyalty points, dynamic menu, in-app games, and branch mapping.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f',
    tags: ['Flutter', 'Firebase', 'Google Maps API'],
    emoji: '🥔',
    duration: '6 months',
    teamSize: 4,
    role: 'Lead Mobile Developer',
    features: [
      'Dynamic menu management system',
      'Real-time order tracking',
      'Loyalty points system',
      'In-app mini games',
      'Branch locator with Google Maps integration',
      'Push notifications for offers and updates'
    ],
    technologies: [
      {
        name: 'Flutter',
        description: 'Cross-platform framework for building native apps'
      },
      {
        name: 'Firebase',
        description: 'Backend services for authentication, database, and analytics'
      },
      {
        name: 'Google Maps API',
        description: 'Location services and branch mapping functionality'
      }
    ],
    challenges: [
      'Implementing real-time synchronization across multiple devices',
      'Optimizing app performance with large menu data',
      'Handling offline functionality',
      'Integrating complex loyalty point calculations'
    ],
    solutions: [
      'Used Firebase Real-time Database for instant data sync',
      'Implemented efficient caching and lazy loading',
      'Created robust offline-first architecture',
      'Developed a scalable points calculation algorithm'
    ],
    testimonials: [
      {
        name: 'Ahmed Abdallah',
        role: 'Restaurant Manager',
        comment: 'The app has significantly improved our order management efficiency, customer engagement, and loyalty.'
      }
    ],
    github: 'https://github.com/zeck00/banderspotato'
  },
  {
    id: 'automated-review-system',
    title: 'Automated Review Rating System',
    description: 'NLP-powered system for urban development decision-making using deep learning.',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2',
    tags: ['Python', 'NLP', 'Deep Learning'],
    emoji: '🤖',
    duration: '4 months',
    teamSize: 3,
    role: 'AI Engineer & Project Lead',
    features: [
      'Automated text analysis',
      'Sentiment classification',
      'Priority scoring system',
      'Data visualization dashboard',
      'Batch processing capabilities'
    ],
    technologies: [
      {
        name: 'Python',
        description: 'Core programming language for the system'
      },
      {
        name: 'TensorFlow',
        description: 'Deep learning framework for NLP models'
      },
      {
        name: 'BERT',
        description: 'Pre-trained model for natural language understanding'
      }
    ],
    challenges: [
      'Handling multiple languages in reviews',
      'Achieving high accuracy in sentiment analysis',
      'Processing large volumes of data efficiently',
      'Creating meaningful visualization of results'
    ],
    solutions: [
      'Implemented multilingual BERT model',
      'Fine-tuned model with domain-specific data',
      'Developed parallel processing pipeline',
      'Created interactive dashboard with Plotly'
    ],
    
  },
  {
    id: 'malware-detection-cnn',
    title: 'Malware Detection Using CNN',
    description: 'AI-based system to classify goodware and malware by converting API call sequences into images.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    tags: ['Python', 'Deep Learning', 'Security'],
    emoji: '🛡️',
    duration: '5 months',
    teamSize: 1,
    role: 'Researcher & Developer',
    features: [
      'Binary classification of malware and goodware',
      'Image transformation from API sequences',
      'High-accuracy CNN models',
      'Comprehensive visualization of training results'
    ],
    technologies: [
      {
        name: 'TensorFlow',
        description: 'Deep learning framework for CNNs'
      },
      {
        name: 'Python',
        description: 'Core programming language for the project'
      }
    ],
    challenges: [
      'Optimizing CNN for high accuracy',
      'Handling imbalanced datasets',
      'Preprocessing API call data efficiently'
    ],
    solutions: [
      'Developed an optimized CNN model with 95% accuracy',
      'Implemented data augmentation to balance the dataset',
      'Used efficient encoding for API sequences'
    ], 
    github: 'https://github.com/zeck00/MalwareDetection'
  },
  {
    id: 'kitchensync-app',
    title: 'KitchenSync App',
    description: 'Flutter app to minimize food waste through efficient kitchen management.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    tags: ['Flutter', 'Food Waste Management'],
    emoji: '🥗',
    duration: '3 months',
    teamSize: 3,
    role: 'Lead Mobile Developer',
    features: [
      'Inventory tracking',
      'Recipe suggestions based on available ingredients',
      'Waste monitoring and reporting',
      'User-friendly design for mobile platforms'
    ],
    technologies: [
      {
        name: 'Flutter',
        description: 'Cross-platform framework for building the app'
      }
    ],
    challenges: [
      'Creating a seamless user experience',
      'Integrating real-time inventory updates',
      'Providing accurate recipe suggestions'
    ],
    solutions: [
      'Developed a clean and intuitive UI with Flutter',
      'Implemented a robust inventory tracking system',
      'Used a recommendation engine for recipe suggestions'
    ],
    github: 'https://github.com/zeck00/KitchenSync'
  },
  {
    id: 'edumentor',
    title: 'EduMentor App',
    description: 'Customized tutoring assistant for the Health and Nutrition course.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Flutter', 'AI'],
    emoji: '📚',
    duration: '6 months',
    teamSize: 4,
    role: 'AI Developer & Mobile App Developer',
    features: [
      'Skill assessment system',
      'Targeted quizzes for weak areas',
      'GPT-based question generation',
      'Score tracking and analytics'
    ],
    technologies: [
      {
        name: 'Flutter',
        description: 'Cross-platform app development framework'
      },
      {
        name: 'Firebase',
        description: 'Backend services for database and analytics'
      }
    ],
    challenges: [
      'Building a dynamic quiz system',
      'Integrating AI for personalized tutoring',
      'Ensuring smooth user experience'
    ],
    solutions: [
      'Developed GPT-based question generation logic',
      'Created a user-friendly interface with Flutter',
      'Used Firebase for real-time data synchronization'
    ],
    github: 'https://github.com/zeck00/EduMentor'
  },
  {
    id: 'sejda-space',
    title: 'SejdaSpace App',
    description: 'Islamic resource app with Quran, Hadith, and Qibla location functionality.',
    image: 'https://images.unsplash.com/photo-1570206916435-745fc43bb9c1?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Flutter', 'Firebase'],
    emoji: '📖',
    duration: '4 months',
    teamSize: 2,
    role: 'Full Stack Developer',
    features: [
      'Offline Quran reading',
      'Qibla locator',
      'Hadith collection',
      'Multilingual support',
      'Audio recitation'
    ],
    technologies: [
      {
        name: 'Flutter',
        description: 'Framework for mobile app development'
      },
      {
        name: 'Firebase',
        description: 'Backend for data storage and analytics'
      }
    ],
    challenges: [
      'Building an offline-first architecture',
      'Integrating Qibla direction functionality',
      'Ensuring multilingual support'
    ],
    solutions: [
      'Used local storage for offline access',
      'Integrated compass and GPS for Qibla',
      'Implemented language support for multiple regions'
    ]
  },
  {
    id: 'medical-center-dbms',
    title: 'Medical Center DBMS',
    description: 'Database management system for a medical center with full documentation.',
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f',
    tags: ['SQL', 'Database'],
    emoji: '🏥',
    duration: '2 months',
    teamSize: 1,
    role: 'Database Designer & Developer',
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Doctor and staff database',
      'Comprehensive reporting'
    ],
    technologies: [
      {
        name: 'SQL',
        description: 'Structured Query Language for database operations'
      }
    ],
    challenges: [
      'Designing a scalable schema',
      'Ensuring data integrity and security',
      'Optimizing query performance'
    ],
    solutions: [
      'Developed a normalized database schema',
      'Implemented access control mechanisms',
      'Optimized queries for fast data retrieval'
    ]
  }
];



export const experiences: Experience[] = [
  {
    title: 'Full Stack Mobile App Developer',
    company: "Bander's Potato",
    period: 'Aug 2024 – Present',
    description: 'Leading mobile app development and implementing innovative features like loyalty points and branch mapping.',
    companyUrl: 'https://www.banderspotato.com',
  },
  {
    title: 'President',
    company: 'UOS ACM Student Chapter',
    period: 'Aug 2024 – Present',
    description: 'Driving innovation through technical initiatives and organizing developer-centric events.',
    companyUrl: 'https://www.sharjah.ac.ae/en/Academics/CI/ACM-Student-Chapter',
  },
  {
    title: 'Technical Operations Manager',
    company: 'Esaal',
    period: 'Jan 2024 – Jun 2024',
    description: 'Managed technical operations and led seamless app integrations and feature launches.',
    companyUrl: 'https://www.esaal.co',
  },
  {
    title: 'Flutter Developer',
    company: 'Esaal',
    period: 'Jun 2023 – Jun 2024',
    description: 'Designed and maintained cross-platform mobile applications.',
    companyUrl: 'https://www.esaal.co',
  },
  {
    title: 'AI & DL Engineer',
    company: 'University of Sharjah',
    period: 'May 2023 – Jan 2024',
    description: 'Developed AI models for urban research, focusing on NLP and machine learning.',
    companyUrl: 'https://www.sharjah.ac.ae',
  },
  {
    title: 'AI & DL Mentor',
    company: 'University of Sharjah',
    period: 'Nov 2022 – Mar 2023',
    description: 'Guided students through advanced deep learning projects, contributing to academic excellence.',
    companyUrl: 'https://www.sharjah.ac.ae',
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Freelance',
    period: 'Aug 2024 – Present',
    description: 'Delivered tailored web and mobile app solutions for diverse clients.',
    companyUrl: '#',
  },
  {
    title: 'AI NLP Researcher',
    company: 'Private Work',
    period: '2024',
    description: 'Engineered sentiment analysis models for urban development decision-making.',
    companyUrl: '#',
  },
  {
    title: 'CNN Researcher',
    company: 'Malware Detection Project',
    period: '2024',
    description: 'Developed a CNN-based system achieving 95% accuracy for malware classification.',
    companyUrl: 'https://sharjah.ac.ae',
  },
];


export const skills: Skill[] = [
  {
    name: "React & React Native",
    level: 90,
    category: "frontend",
    emoji: "⚛️"
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    emoji: "📘"
  },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "frontend",
    emoji: "🎨"
  },
  {
    name: "Next.js",
    level: 88,
    category: "frontend",
    emoji: "▲"
  },

  {
    name: "Flutter",
    level: 92,
    category: "mobile",
    emoji: "📱"
  },
  {
    name: "iOS Development",
    level: 85,
    category: "mobile",
    emoji: "🍎"
  },
  {
    name: "Android Development",
    level: 85,
    category: "mobile",
    emoji: "🤖"
  },
  {
    name: "Mobile UI/UX",
    level: 90,
    category: "mobile",
    emoji: "🎯"
  },

  {
    name: "Machine Learning",
    level: 88,
    category: "ai",
    emoji: "🧠"
  },
  {
    name: "Natural Language Processing",
    level: 85,
    category: "ai",
    emoji: "📝"
  },
  {
    name: "Computer Vision",
    level: 82,
    category: "ai",
    emoji: "👁️"
  },
  {
    name: "TensorFlow & PyTorch",
    level: 85,
    category: "ai",
    emoji: "📊"
  },

  {
    name: "Node.js & Express",
    level: 88,
    category: "backend",
    emoji: "🚀"
  },
  {
    name: "Python Django",
    level: 85,
    category: "backend",
    emoji: "🐍"
  },
  {
    name: "Firebase",
    level: 90,
    category: "backend",
    emoji: "🔥"
  },
  {
    name: "RESTful APIs",
    level: 92,
    category: "backend",
    emoji: "🔌"
  }
];

export const certifications: Certification[] = [
  {
    name: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    date: '2024',
    link: '#'
  },
  {
    name: 'TensorFlow Neural Networks',
    issuer: 'Google',
    date: '2023',
    link: '#'
  },
  {
    name: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    date: '2023',
    link: '#'
  }
];