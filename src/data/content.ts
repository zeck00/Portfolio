import { Project, Experience, Skill, Certification } from '../types';

export const projects: Project[] = [
  {
    id: 'banders-potato-app',
    title: "Bander's Potato App",
    description: 'A bilingual restaurant app with loyalty points, dynamic menu, in-app games, and branch mapping.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f',
    tags: ['Flutter', 'Firebase', 'Google Maps API'],
    emoji: '🥔',
    duration: '6 months',
    teamSize: 4,
    role: 'Lead Mobile Developer',
    features: [
      'Dynamic menu management system',
      'Real-time branch locator with Google Maps integration',
      'In-app games for engagement',
      'Loyalty system for points and coupons',
      'Push notifications for offers and updates',
      'Firebase integration for authentication and database'
    ],
    technologies: [
      { name: 'Flutter', description: 'Cross-platform development framework' },
      { name: 'Firebase', description: 'Cloud-based backend platform for data sync' },
      { name: 'Google Maps API', description: 'Enables location-based services' }
    ],
    challenges: [
      'Real-time synchronization of data across devices',
      'Ensuring smooth offline functionality',
      'Integrating a scalable loyalty system'
    ],
    solutions: [
      'Implemented Firebase Firestore for real-time sync',
      'Developed an offline-first architecture using local storage',
      'Created an algorithm for loyalty point management'
    ],
    github: 'https://github.com/zeck00/banderspotato'
  },
  {
    id: 'automated-review-system',
    title: 'Automated Review Rating System',
    description: 'Deep learning-powered NLP system to analyze and prioritize urban development reviews.',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2',
    tags: ['Python', 'NLP', 'TensorFlow'],
    emoji: '🤖',
    duration: '4 months',
    teamSize: 3,
    role: 'AI Engineer & Team Lead',
    features: [
      'Automated sentiment analysis',
      'Priority scoring for urban projects',
      'Interactive visualization dashboard',
      'Batch processing for large datasets'
    ],
    technologies: [
      { name: 'TensorFlow', description: 'Framework for deep learning models' },
      { name: 'BERT', description: 'Pre-trained transformer model for text' },
      { name: 'Python', description: 'Used for developing and integrating pipelines' }
    ],
    challenges: [
      'Handling multi-language reviews',
      'Ensuring high accuracy for sentiment classification',
      'Processing and visualizing large datasets'
    ],
    solutions: [
      'Fine-tuned a pre-trained BERT model for urban data',
      'Built a parallel processing pipeline for faster execution',
      'Used Plotly for interactive visualizations'
    ],
  },
  {
    id: 'malware-detection-cnn',
    title: 'Malware Detection Using CNN',
    description: 'A deep learning project to classify malware and goodware using API call sequences.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    tags: ['Python', 'Deep Learning', 'Cybersecurity'],
    emoji: '🛡️',
    duration: '5 months',
    teamSize: 1,
    role: 'Researcher',
    features: [
      'Binary classification of malware and goodware',
      'API sequence transformation into image format',
      'High-accuracy CNN model',
      'Training visualization with detailed metrics'
    ],
    technologies: [
      { name: 'TensorFlow', description: 'Deep learning framework for CNNs' },
      { name: 'Python', description: 'Primary language for implementation' }
    ],
    challenges: [
      'Optimizing CNN performance for imbalanced data',
      'Encoding API sequences effectively',
      'Visualizing training progress clearly'
    ],
    solutions: [
      'Implemented data augmentation to balance the dataset',
      'Created custom encoding pipelines for API sequences',
      'Used TensorBoard for detailed visualizations'
    ],
    github: 'https://github.com/zeck00/MalwareDetection'
  },
  {
    id: 'kitchensync-app',
    title: 'KitchenSync App',
    description: 'A Flutter app promoting food waste reduction through better inventory management.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    tags: ['Flutter', 'Recommendation System'],
    emoji: '🥗',
    duration: '3 months',
    teamSize: 3,
    role: 'Lead Mobile Developer',
    features: [
      'Ingredient-based recipe suggestions',
      'Real-time inventory updates',
      'Waste monitoring and reduction reports',
      'User-friendly mobile-first design'
    ],
    technologies: [
      { name: 'Flutter', description: 'Cross-platform framework for development' },
      { name: 'Custom Recommendation Engine', description: 'For recipe suggestions' }
    ],
    challenges: [
      'Integrating real-time inventory management',
      'Creating a seamless user interface',
      'Building an efficient recommendation engine'
    ],
    solutions: [
      'Built a robust inventory tracking module with real-time updates',
      'Designed an intuitive UI using Flutter widgets',
      'Implemented a lightweight recommendation system for recipes'
    ],
    github: 'https://github.com/zeck00/KitchenSync'
  },
  {
    id: 'edumentor',
    title: 'EduMentor App',
    description: 'A personalized tutoring app targeting Health and Nutrition students.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Flutter', 'AI', 'Firebase'],
    emoji: '📚',
    duration: '6 months',
    teamSize: 4,
    role: 'AI Developer & Mobile App Developer',
    features: [
      'Customized quiz generation using GPT',
      'Tracking scores and progress by chapter',
      'Targeted exercises for weak areas',
      'Dynamic UI tailored for Health and Nutrition students'
    ],
    technologies: [
      { name: 'Flutter', description: 'Framework for cross-platform app development' },
      { name: 'Firebase', description: 'Backend for user data and analytics' },
      { name: 'GPT-based Engine', description: 'For AI-generated questions' }
    ],
    challenges: [
      'Building dynamic GPT-based question generation',
      'Ensuring a personalized experience for each student',
      'Integrating real-time updates for student progress'
    ],
    solutions: [
      'Designed an AI-driven system for tailored quizzes',
      'Used Firebase to synchronize data in real-time',
      'Developed intuitive analytics dashboards for users'
    ],
    github: 'https://github.com/zeck00/EduMentor'
  },
  {
    id: 'sejda-space',
    title: 'SejdaSpace App',
    description: 'An Islamic resource app offering Quran, Hadith, Qibla direction, and multilingual support.',
    image: 'https://images.unsplash.com/photo-1570206916435-745fc43bb9c1?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Flutter', 'Firebase'],
    emoji: '📖',
    duration: '4 months',
    teamSize: 2,
    role: 'Full Stack Developer',
    features: [
      'Offline Quran reading',
      'Audio recitation with multiple Qaris',
      'Qibla locator using GPS and compass',
      'Comprehensive Hadith collection',
      'Multilingual support for diverse users'
    ],
    technologies: [
      { name: 'Flutter', description: 'Framework for mobile app development' },
      { name: 'Firebase', description: 'Backend for storage and analytics' }
    ],
    challenges: [
      'Ensuring offline-first functionality for the Quran',
      'Accurate Qibla direction integration',
      'Supporting multiple languages seamlessly'
    ],
    solutions: [
      'Utilized local storage for offline content access',
      'Integrated compass and GPS APIs for precise Qibla directions',
      'Implemented an i18n solution for multilingual support'
    ],
  },
  {
    id: 'medical-center-dbms',
    title: 'Medical Center DBMS',
    description: 'A comprehensive database system for managing medical center operations.',
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f',
    tags: ['SQL', 'Database'],
    emoji: '🏥',
    duration: '2 months',
    teamSize: 1,
    role: 'Database Designer & Developer',
    features: [
      'Patient record management',
      'Appointment scheduling system',
      'Doctor and staff database',
      'Reporting system for operations analytics'
    ],
    technologies: [
      { name: 'SQL', description: 'Structured Query Language for managing databases' }
    ],
    challenges: [
      'Designing a scalable database schema',
      'Ensuring data integrity and security',
      'Optimizing queries for performance'
    ],
    solutions: [
      'Developed a normalized schema to minimize redundancy',
      'Implemented role-based access control for security',
      'Optimized SQL queries for faster data retrieval'
    ],
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
    name: "Flutter",
    level: "Expert",
    category: "frontend",
    emoji: "📱"
  },
  {
    name: "TypeScript",
    level: "Advanced",
    category: "frontend",
    emoji: "📘"
  },
  {
    name: "CSS",
    level: "Advanced",
    category: "frontend",
    emoji: "🎨"
  },
  {
    name: "HTML",
    level: "Advanced",
    category: "frontend",
    emoji: "🌐"
  },
  {
    name: "Flutter",
    level: "Expert",
    category: "mobile",
    emoji: "📱"
  },
  {
    name: "iOS Development",
    level: "Advanced",
    category: "mobile",
    emoji: "🍎"
  },
  {
    name: "Android Development",
    level: "Advanced",
    category: "mobile",
    emoji: "🤖"
  },
  {
    name: "Mobile UI/UX",
    level: "Expert",
    category: "mobile",
    emoji: "🎯"
  },
  {
    name: "Machine Learning",
    level: "Expert",
    category: "ai",
    emoji: "🧠"
  },
  {
    name: "Deep Learning",
    level: "Expert",
    category: "ai",
    emoji: "🧠"
  },
  {
    name: "Natural Language Processing",
    level: "Expert",
    category: "ai",
    emoji: "📝"
  },
  {
    name: "Computer Vision",
    level: "Intermediate",
    category: "ai",
    emoji: "👁️"
  },
  {
    name: "TensorFlow & PyTorch",
    level: "Advanced",
    category: "ai",
    emoji: "📊"
  },
  {
    name: "Firebase",
    level: "Expert",
    category: "backend",
    emoji: "🔥"
  },
  {
    name: "RESTful APIs",
    level: "Expert",
    category: "backend",
    emoji: "🔌"
  },
  {
    name: "SQL",
    level: "Advanced",
    category: "backend",
    emoji: "💾"
  },
  {
    name: "Git",
    level: "Advanced",
    category: "backend",
    emoji: "🔄"
  },
  {
    name: "OneSignal",
    level: "Advanced",
    category: "backend",
    emoji: "🔔"
  }
];


export const certifications: Certification[] = [
  {
    name: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    date: '2024',
    link: 'https://www.linkedin.com/learning/certificates/f2cc323739c326cab7b4c33615393dcbf12b9f938ad759da13747543eb9cf10c'
  },
  {
    name: 'Generative AI: The Evolution of Thoughtful Online Search',
    issuer: 'LinkedIn',
    date: '2023',
    link: 'https://www.linkedin.com/learning/certificates/414ffbd87b196166f0aaccf7054700782221657cd2e098cfdd6c569b7872d93e'
  },
  {
    name: 'TensorFlow Neural Networks and Working with Tables',
    issuer: 'LinkedIn',
    date: '2023',
    link: 'https://www.linkedin.com/learning/certificates/98f7d488621e0f70883099f0ebfd8a8aca24146ad46575dc22bb484b986aff2f'
  },
  {
    name: 'What Is Generative AI',
    issuer: 'LinkedIn',
    date: '2023',
    link: 'https://www.linkedin.com/learning/certificates/c794452f07ea418a798d499802744b3382e79fdc500df86efc2b0d8fb7556839'
  },
  {
    name: 'Introduction to Artificial Intelligence',
    issuer: 'LinkedIn',
    date: '2023',
    link: 'https://drive.google.com/file/d/1HjWH9TFxjMykoXZ_MnmxscG5CI6huN8x/view?usp=sharing'
  },
  {
    name: 'Nanodegree In Data Analysis',
    issuer: 'TechUp + Udacity',
    date: '2023',
    link: 'https://drive.google.com/file/d/1LeDKYzFBMUC9_mwUxF51h_bjXRhL6hFI/view?usp=sharing'
  },
  {
    name: 'Machine Learning with Python: Foundations',
    issuer: 'LinkedIn',
    date: '2023',
    link: 'https://drive.google.com/file/d/1LUDYYyGBAVauJKL0HyXy_Y2vZbjbb8du/view?usp=sharing'
  },
  {
    name: 'Ethics in the Age of Generative AI',
    issuer: 'LinkedIn',
    date: '2023',
    link: 'https://drive.google.com/file/d/1E3NUThpvR3i_-9Z4sgc-AXBNzne8CBF8/view?usp=sharing'
  },
  {
    name: 'Learning Microsoft 365 Copilot',
    issuer: 'LinkedIn',
    date: '2023',
    link: 'https://drive.google.com/file/d/1bY_211QsEMSzUoW9f7asWwhOPZ93IYqu/view?usp=drive_link'
  },
  {
    name: 'Streamlining Your Work with Copilot',
    issuer: 'LinkedIn',
    date: '2023',
    link: 'https://drive.google.com/file/d/1YyvLtUE_QDHep6-gJ2ABLg465tk18b4D/view?usp=sharing'
  },
  {
    name: 'Building and Deploying Deep Learning Applications with TensorFlow',
    issuer: 'LinkedIn',
    date: '2023',
    link: 'https://drive.google.com/file/d/1oQiylmW0Pbx8yN6GVEjou9b3-IcLQmjO/view?usp=sharing'
  },
  {
    name: 'The Fundamentals of Digital Marketing',
    issuer: 'Google',
    date: '2023',
    link: 'https://drive.google.com/file/d/1bdIQTahne2eNL8l7pWwCznwb7uJ-YWHE/view?usp=sharing'
  },
  {
    name: 'Graphic Design',
    issuer: 'Udemy',
    date: '2023',
    link: 'https://www.udemy.com/certificate/UC-83ab2b64-6676-4d18-9e96-e01ee7ceca12/'
  },
  {
    name: 'Creating Digital Content',
    issuer: 'Forsa',
    date: '2023',
    link: 'https://for9a-media.s3.amazonaws.com/courses/certificate/forsa-certificate-104724738914926333891.pdf'
  },
  {
    name: 'Entrepreneurship',
    issuer: 'Forsa',
    date: '2023',
    link: 'https://for9a-media.s3.amazonaws.com/courses/certificate/forsa-certificate-104724740214926344021.pdf'
  },
  {
    name: 'An Introduction to Electronics',
    issuer: 'The Open University',
    date: '2023',
    link: 'https://drive.google.com/file/d/1hYfEWjy1oRVAW_W8OsGpsh2nkWkfuoT_/view?usp=sharing'
  }
];
