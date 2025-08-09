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
  bio: "Senior Android Developer with over 15+ years of experience, having led mobile innovation at Samsung Electronics where I spearheaded the development of Bixby Vision Shopping service. My expertise spans complex system design, high-performance mobile applications, and architectural solutions that serve millions of users across global enterprises like HSBC and cutting-edge companies like GIT America.",
  highlights: [
    "15+ years of professional Android development experience",
    "Developed Bixby Vision Shopping service integrated into Samsung Camera app",
    "Led Zelle P2P payment integration for HSBC banking app serving 1.5M+ users",
    "Engineered integrated diagnostic service (KTUS) reducing inspection time by 10-20%",
    "Built data pipeline processing 65+ million product items for ML training",
    "Expert in Kotlin, Java, Python, and modern Android architecture patterns",
    "Master's in Computer Science with Machine Learning specialization (in progress)",
    "Strong background in performance optimization and enterprise-scale solutions"
  ],
  stats: [
    { label: "Years Experience", value: "15+" },
    { label: "Users Served", value: "1.5M+" },
    { label: "Major Companies", value: "Samsung" },
    { label: "Current Focus", value: "AI/ML" }
  ]
}

export const experienceData = [
  {
    id: 1,
    title: "Sr. Software Engineer",
    company: "GIT America, Inc.",
    location: "Irvine, CA",
    duration: "Sep. 2023 - Present",
    type: "Full-time",
    description: "Architecting end-to-end Android applications for Galaxy Tab diagnostic solutions and automotive inspection systems.",
    achievements: [
      "Architect diagnostic Android application for Galaxy Tab series, overseeing full SDLC",
      "Implemented GDS Smart connectivity and automated diagnostic report transfers",
      "Engineered integrated diagnostic service (KTUS) for Kia's PDI process",
      "Reduced average inspection time by 10% to 20% through system unification",
      "Maintained core warranty claim feature processing 25GB data daily for 4,000 DAU"
    ],
    technologies: ["Android", "Kotlin", "Java", "System Architecture", "Diagnostic Tools", "Data Processing"]
  },
  {
    id: 2,
    title: "Sr. Android Developer",
    company: "HSBC",
    location: "Vancouver, BC, Canada",
    duration: "Feb. 2022 - May 2023",
    type: "Full-time",
    description: "Spearheaded P2P payment integration and modular architecture for enterprise banking solutions.",
    achievements: [
      "Spearheaded Zelle P2P payment integration for 1.5M+ users",
      "Delivered secure payment experience driving 15% increase in Monthly Active Users",
      "Restructured modular libraries for reusable Android components (Accounts, Check Deposit, Analytics)",
      "Enhanced scalable components used by global team of 30+ developers",
      "Mentored new hires on Android best practices and TDD principles"
    ],
    technologies: ["Kotlin", "Android SDK", "Payment APIs", "Modular Architecture", "TDD", "Banking Systems"]
  },
  {
    id: 3,
    title: "Sr. Software Engineer",
    company: "Samsung Electronics",
    location: "Suwon, South Korea",
    duration: "Mar. 2010 - Sep. 2019",
    type: "Full-time",
    description: "Led mobile innovation projects including Bixby Vision Shopping, Car Mode, and 3D Video Player applications.",
    achievements: [
      "Steered development and launch of Bixby Vision Shopping service",
      "Successfully integrated as native plug-in within Samsung Camera app",
      "Engineered data pipeline parsing 65+ million product items for ML training",
      "Led Car Mode Android application development including Mirrorlink 1.1 standardization",
      "Implemented 3D Video Player with complex UI/UX using OpenGL ES and Android NDK"
    ],
    technologies: ["Android", "Java", "Python", "OpenGL ES", "Android NDK", "Computer Vision", "ML Pipeline"]
  }
]

export const skillsData = {
  technical: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 95, years: "15+" },
        { name: "Kotlin", level: 95, years: "8+" },
        { name: "Python", level: 85, years: "5+" },
        { name: "C/C++", level: 80, years: "10+" },
        { name: "C#", level: 75, years: "3+" }
      ]
    },
    {
      category: "Frameworks & Platforms",
      skills: [
        { name: "Android SDK", level: 95, years: "15+" },
        { name: "Spring Boot", level: 85, years: "5+" },
        { name: ".NET Framework", level: 75, years: "3+" },
        { name: "OpenGL ES", level: 80, years: "5+" },
        { name: "Android NDK", level: 85, years: "8+" }
      ]
    },
    {
      category: "Databases & Data",
      skills: [
        { name: "MySQL", level: 90, years: "12+" },
        { name: "Oracle", level: 85, years: "8+" },
        { name: "PostgreSQL", level: 80, years: "5+" },
        { name: "Room Database", level: 90, years: "6+" },
        { name: "DynamoDB", level: 75, years: "3+" }
      ]
    },
    {
      category: "Tools & Testing",
      skills: [
        { name: "Git", level: 95, years: "15+" },
        { name: "Android Studio", level: 95, years: "15+" },
        { name: "Jira", level: 90, years: "10+" },
        { name: "Postman", level: 85, years: "6+" },
        { name: "JUnit/Mockito/Espresso", level: 90, years: "10+" }
      ]
    }
  ],
  soft: [
    "Team Leadership",
    "System Architecture", 
    "Agile/Scrum",
    "Technical Documentation",
    "Mentoring & Coaching",
    "TDD (Test-Driven Development)",
    "Problem Solving",
    "Cross-functional Collaboration"
  ]
}

export const projectsData = [
  {
    id: 1,
    title: "Bixby Vision Shopping",
    description: "Revolutionary computer vision shopping service integrated into Samsung Camera app, enabling users to search and shop for products by taking photos. Engineered data pipeline processing 65+ million product items for ML training.",
    image: "/api/placeholder/600/400",
    tags: ["Android", "Computer Vision", "Python", "ML Pipeline", "Samsung Camera", "Data Processing"],
    features: [
      "Native integration within Samsung Camera app",
      "Real-time product recognition and search",
      "ML-powered product recommendations",
      "Massive data pipeline for 65M+ items",
      "Seamless shopping experience"
    ],
    metrics: {
      users: "Millions",
      rating: "Samsung",
      downloads: "Global"
    },
    links: {
      playStore: "Samsung Galaxy devices",
      github: "Proprietary"
    },
    status: "Published"
  },
  {
    id: 2,
    title: "HSBC Zelle P2P Payments",
    description: "Secure peer-to-peer payment integration for HSBC banking app, delivering seamless money transfer experience for 1.5M+ users and driving 15% increase in Monthly Active Users.",
    image: "/api/placeholder/600/400",
    tags: ["Kotlin", "Payment APIs", "Banking Security", "P2P Payments", "Financial Services"],
    features: [
      "Secure P2P payment integration",
      "Real-time money transfers",
      "Banking-grade security protocols",
      "Seamless user experience",
      "Compliance with financial regulations"
    ],
    metrics: {
      users: "1.5M+",
      rating: "15% MAU",
      downloads: "Enterprise"
    },
    links: {
      playStore: "HSBC Mobile Banking",
      github: "Enterprise"
    },
    status: "Published"
  },
  {
    id: 3,
    title: "Galaxy Tab Diagnostic System",
    description: "End-to-end diagnostic Android application for Galaxy Tab series, featuring GDS Smart connectivity and automated diagnostic report transfers to streamline warranty support processes.",
    image: "/api/placeholder/600/400",
    tags: ["Android", "Kotlin", "System Diagnostics", "Galaxy Tab", "GDS Smart", "Data Processing"],
    features: [
      "Comprehensive device diagnostics",
      "GDS Smart connectivity integration",
      "Automated report generation",
      "Warranty support streamlining",
      "Real-time diagnostic monitoring"
    ],
    metrics: {
      users: "4,000 DAU",
      rating: "25GB Daily",
      downloads: "Enterprise"
    },
    links: {
      playStore: "Enterprise Tool",
      github: "GIT America"
    },
    status: "Active"
  },
  {
    id: 4,
    title: "KTUS Integrated Diagnostic Service",
    description: "Engineered integrated diagnostic service for Kia's PDI (Pre-Delivery Inspection) process by unifying multiple legacy applications, reducing average inspection time by 10% to 20%.",
    image: "/api/placeholder/600/400",
    tags: ["Android", "System Integration", "Automotive", "Process Optimization", "Legacy Migration"],
    features: [
      "Legacy system unification",
      "Streamlined PDI process",
      "Automated inspection workflows",
      "Performance optimization",
      "Real-time process monitoring"
    ],
    metrics: {
      users: "Kia Dealers",
      rating: "20% Faster",
      downloads: "Automotive"
    },
    links: {
      playStore: "Automotive Tool",
      github: "GIT America"
    },
    status: "Active"
  },
  {
    id: 5,
    title: "Samsung Car Mode & 3D Video Player",
    description: "Led development of Car Mode Android application for Galaxy series including Mirrorlink 1.1 standardization, and implemented 3D Video Player with complex UI/UX using OpenGL ES and Android NDK.",
    image: "/api/placeholder/600/400",
    tags: ["Android", "OpenGL ES", "Android NDK", "Mirrorlink", "3D Graphics", "Automotive"],
    features: [
      "Mirrorlink 1.1 standardization",
      "Advanced 3D graphics rendering",
      "Complex UI/UX implementation",
      "OpenGL ES optimization",
      "Native performance enhancements"
    ],
    metrics: {
      users: "Galaxy Users",
      rating: "Samsung",
      downloads: "Global"
    },
    links: {
      playStore: "Samsung Galaxy",
      github: "Samsung Electronics"
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