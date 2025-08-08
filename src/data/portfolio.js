export const personalInfo = {
  name: 'Daiyong Kim',
  title: 'Senior Android Developer',
  subtitle: '15+ Years of Mobile Excellence',
  email: 'daiyongg.kim@gmail.com',
  phone: '949-343-8946',
  location: 'Irvine, CA',
  linkedin: 'https://linkedin.com/in/kim-daiyong/',
  github: 'https://github.com/daiyongkim',
  website: 'https://daiyongkim.dev'
}

export const heroContent = {
  greeting: "Hi, I'm Daiyong Kim",
  headline: "Senior Android Developer",
  description: "Senior Android Developer with over 15+ years of experience, having led mobile innovation at Samsung Electronics. Strong in designing complex systems and developing high-performance applications leveraging modern technologies.",
  cta: {
    primary: "View My Work",
    secondary: "Download Resume"
  }
}

export const aboutContent = {
  bio: "With over a decade of experience in Android development, I've had the privilege of working with startups to Fortune 500 companies, delivering high-quality mobile applications that serve millions of users. My expertise spans the entire mobile development lifecycle, from concept to deployment and maintenance.",
  highlights: [
    "10+ years of professional Android development experience",
    "Led teams of 5-15 developers on multiple large-scale projects",
    "Published 20+ apps on Google Play Store with 5M+ downloads",
    "Expert in modern Android architecture patterns (MVVM, Clean Architecture)",
    "Strong background in performance optimization and scalability",
    "Active contributor to open-source Android libraries"
  ],
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Apps Published", value: "20+" },
    { label: "Total Downloads", value: "5M+" },
    { label: "Team Members Led", value: "15+" }
  ]
}

export const experienceData = [
  {
    id: 1,
    title: "Senior Android Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    duration: "2020 - Present",
    type: "Full-time",
    description: "Leading Android development for flagship mobile applications serving 2M+ active users.",
    achievements: [
      "Reduced app crash rate by 85% through comprehensive error handling and monitoring",
      "Improved app performance by 40% through code optimization and caching strategies",
      "Led migration from Java to Kotlin, resulting in 30% reduction in codebase size",
      "Mentored 8 junior developers, with 6 receiving promotions within 18 months"
    ],
    technologies: ["Kotlin", "Android Jetpack", "Room", "Retrofit", "RxJava", "Dagger Hilt"]
  },
  {
    id: 2,
    title: "Android Developer",
    company: "StartupXYZ",
    location: "San Francisco, CA", 
    duration: "2018 - 2020",
    type: "Full-time",
    description: "Developed core Android applications from MVP to production with 500K+ users.",
    achievements: [
      "Built entire Android app from scratch, gaining 500K users in first year",
      "Implemented real-time messaging system supporting 10K concurrent users",
      "Achieved 4.7/5 rating on Google Play Store with 95% crash-free sessions",
      "Integrated payment systems resulting in $2M+ revenue within first 6 months"
    ],
    technologies: ["Java", "Android SDK", "Firebase", "SQLite", "Volley", "Material Design"]
  },
  {
    id: 3,
    title: "Mobile Developer",
    company: "Digital Solutions Ltd",
    location: "Seoul, South Korea",
    duration: "2015 - 2018",
    type: "Full-time",
    description: "Specialized in Android development for enterprise and consumer applications.",
    achievements: [
      "Developed 8+ Android applications across various industries",
      "Implemented offline-first architecture supporting complex data synchronization",
      "Reduced development time by 50% through creation of reusable component library",
      "Led technical interviews and hired 5 Android developers"
    ],
    technologies: ["Java", "Android Studio", "RESTful APIs", "Git", "Jenkins", "MongoDB"]
  },
  {
    id: 4,
    title: "Junior Android Developer",
    company: "Mobile Innovations",
    location: "Seoul, South Korea",
    duration: "2014 - 2015",
    type: "Full-time",
    description: "Started career developing Android applications for local businesses and startups.",
    achievements: [
      "Contributed to 5+ Android projects as team member",
      "Learned modern Android development practices and design patterns",
      "Received 'Rising Star' award for exceptional performance and learning agility",
      "Successfully completed Google Android Developer Certification"
    ],
    technologies: ["Java", "Android SDK", "Eclipse", "SVN", "MySQL"]
  }
]

export const skillsData = {
  technical: [
    {
      category: "Mobile Development",
      skills: [
        { name: "Kotlin", level: 95, years: "5+" },
        { name: "Java", level: 90, years: "10+" },
        { name: "Android SDK", level: 95, years: "10+" },
        { name: "Android Jetpack", level: 90, years: "4+" },
        { name: "React Native", level: 70, years: "2+" }
      ]
    },
    {
      category: "Architecture & Patterns",
      skills: [
        { name: "MVVM", level: 95, years: "6+" },
        { name: "Clean Architecture", level: 90, years: "4+" },
        { name: "Repository Pattern", level: 95, years: "6+" },
        { name: "Dependency Injection", level: 90, years: "5+" },
        { name: "Design Patterns", level: 85, years: "8+" }
      ]
    },
    {
      category: "Data & Networking",
      skills: [
        { name: "Room Database", level: 90, years: "4+" },
        { name: "SQLite", level: 95, years: "8+" },
        { name: "Retrofit", level: 95, years: "6+" },
        { name: "RxJava/Coroutines", level: 85, years: "3+" },
        { name: "GraphQL", level: 75, years: "2+" }
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Android Studio", level: 95, years: "10+" },
        { name: "Git", level: 90, years: "10+" },
        { name: "Jenkins/CI-CD", level: 80, years: "5+" },
        { name: "Firebase", level: 85, years: "6+" },
        { name: "Gradle", level: 85, years: "8+" }
      ]
    }
  ],
  soft: [
    "Team Leadership",
    "Project Management", 
    "Mentoring & Coaching",
    "Technical Documentation",
    "Code Review",
    "Agile/Scrum",
    "Problem Solving",
    "Communication"
  ]
}

export const projectsData = [
  {
    id: 1,
    title: "EcommerceX Mobile App",
    description: "Complete e-commerce Android application with advanced features including AR product preview, real-time inventory, and seamless checkout experience.",
    image: "/api/placeholder/600/400",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Retrofit", "ARCore", "Payment APIs"],
    features: [
      "AR product visualization using ARCore",
      "Real-time inventory management",
      "Secure payment integration",
      "Offline-first architecture",
      "Push notifications & deep linking"
    ],
    metrics: {
      users: "1.2M+",
      rating: "4.8/5",
      downloads: "2M+"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.example.ecommercex",
      github: "https://github.com/daiyongkim/ecommercex-android"
    },
    status: "Published"
  },
  {
    id: 2,
    title: "FitnessTracker Pro",
    description: "Advanced fitness tracking application with AI-powered workout recommendations, social features, and comprehensive health analytics.",
    image: "/api/placeholder/600/400",
    tags: ["Kotlin", "Android Jetpack", "MLKit", "Google Fit", "Firebase", "Material3"],
    features: [
      "AI workout recommendations using ML Kit",
      "Google Fit API integration",
      "Social workout challenges",
      "Comprehensive health analytics",
      "Wearable device synchronization"
    ],
    metrics: {
      users: "800K+",
      rating: "4.7/5", 
      downloads: "1.5M+"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.example.fitnesstracker",
      github: "https://github.com/daiyongkim/fitness-tracker-android"
    },
    status: "Published"
  },
  {
    id: 3,
    title: "ChatSecure Messenger",
    description: "End-to-end encrypted messaging application with advanced security features, group chats, and multimedia sharing capabilities.",
    image: "/api/placeholder/600/400",
    tags: ["Kotlin", "WebRTC", "Socket.IO", "Encryption", "Room", "CameraX"],
    features: [
      "End-to-end encryption for all messages",
      "Real-time messaging with Socket.IO",
      "Video/voice calls using WebRTC",
      "Disappearing messages",
      "Advanced media sharing with CameraX"
    ],
    metrics: {
      users: "500K+",
      rating: "4.6/5",
      downloads: "750K+"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.example.chatsecure",
      github: "https://github.com/daiyongkim/chat-secure-android"
    },
    status: "Published"
  },
  {
    id: 4,
    title: "SmartHome Controller",
    description: "IoT home automation app controlling smart devices with voice commands, scheduling, and energy monitoring features.",
    image: "/api/placeholder/600/400",
    tags: ["Kotlin", "IoT", "Voice Recognition", "Bluetooth", "WiFi", "Charts"],
    features: [
      "Voice command integration",
      "Smart device discovery and pairing",
      "Automated scheduling system",
      "Energy consumption analytics",
      "Custom widget support"
    ],
    metrics: {
      users: "300K+",
      rating: "4.5/5",
      downloads: "450K+"
    },
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.example.smarthome",
      github: "https://github.com/daiyongkim/smart-home-android"
    },
    status: "Published"
  }
]

export const contactInfo = {
  title: "Let's Build Something Amazing Together",
  description: "Ready to take your Android project to the next level? I'm always excited to discuss new opportunities and challenges.",
  email: "daiyongg.kim@gmail.com",
  phone: "949-343-8946",
  availability: "Available for new opportunities",
  responseTime: "Usually responds within 24 hours",
  specialties: [
    "Android App Development",
    "Team Leadership & Mentoring", 
    "Architecture & Performance Optimization",
    "Legacy App Modernization",
    "Technical Consultation"
  ]
}