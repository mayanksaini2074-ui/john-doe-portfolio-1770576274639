import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "John Doe",
    "title": "Full Stack Developer",
    "email": "john.doe@email.com",
    "phone": "+1 (555) 123-4567",
    "linkedin": "https://linkedin.com/in/johndoe",
    "github": "https://github.com/johndoe",
    "location": "San Francisco, CA",
    "summary": "Passionate full stack developer with 5+ years of experience building modern web applications. Specializing in React, Node.js, and cloud technologies. I love creating elegant solutions to complex problems and contributing to open-source projects."
  },
  "experience": [
    {
      "title": "Senior Frontend Developer",
      "company": "TechCorp Inc.",
      "dates": "Jan 2022 – Present",
      "description": "Leading the frontend team in building scalable web applications using React and TypeScript.",
      "highlights": [
        "Architected a component library used across 5 product teams",
        "Improved page load performance by 40% through code splitting and lazy loading",
        "Mentored 3 junior developers and led weekly code review sessions"
      ]
    },
    {
      "title": "Full Stack Developer",
      "company": "StartupXYZ",
      "dates": "Jun 2019 – Dec 2021",
      "description": "Built and maintained full-stack features for a SaaS platform serving 10K+ users.",
      "highlights": [
        "Developed RESTful APIs using Node.js and Express",
        "Implemented real-time features using WebSockets",
        "Reduced database query times by 60% through optimization"
      ]
    }
  ],
  "education": [
    {
      "degree": "B.S. Computer Science",
      "institution": "University of California, Berkeley",
      "years": "2015 – 2019",
      "gpa": "3.8"
    }
  ],
  "skills": {
    "Frontend": [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vue.js"
    ],
    "Backend": [
      "Node.js",
      "Python",
      "Express",
      "FastAPI",
      "GraphQL"
    ],
    "Database": [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma"
    ],
    "DevOps": [
      "Docker",
      "AWS",
      "CI/CD",
      "Kubernetes",
      "Terraform"
    ]
  },
  "projects": [
    {
      "name": "TaskFlow",
      "description": "A modern project management tool with real-time collaboration, Kanban boards, and AI-powered task prioritization. Built with Next.js and WebSocket for seamless team productivity.",
      "technologies": [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "WebSocket"
      ],
      "link": "https://taskflow.demo.com",
      "github": "https://github.com/johndoe/taskflow"
    },
    {
      "name": "DevBlog",
      "description": "A developer-focused blogging platform with MDX support, syntax highlighting, and newsletter integration. Features server-side rendering for optimal SEO.",
      "technologies": [
        "React",
        "Node.js",
        "MongoDB",
        "MDX",
        "Tailwind CSS"
      ],
      "link": "https://devblog.demo.com",
      "github": "https://github.com/johndoe/devblog"
    },
    {
      "name": "CloudDeploy",
      "description": "An open-source CLI tool that simplifies deploying applications to AWS, with zero-config deployments for common frameworks like Next.js, Express, and Django.",
      "technologies": [
        "Python",
        "AWS SDK",
        "Docker",
        "CLI"
      ],
      "link": "",
      "github": "https://github.com/johndoe/clouddeploy"
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "spotlight",
  "about": "split",
  "experience": "cards",
  "projects": "featured",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "floating",
  "colorPalette": "rose"
};
