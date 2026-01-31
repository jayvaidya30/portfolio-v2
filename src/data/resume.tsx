import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import ExpressJs from "@/components/ui/svgs/ExpressJs";
import Figma from "@/components/ui/svgs/Figma";
import Git from "@/components/ui/svgs/Git";
import Github from "@/components/ui/svgs/Github";
import Javascript from "@/components/ui/svgs/Javascript";
import Linux from "@/components/ui/svgs/Linux";
import MongoDB from "@/components/ui/svgs/MongoDB";
import Postman from "@/components/ui/svgs/Postman";
import Prisma from "@/components/ui/svgs/Prisma";
import Redis from "@/components/ui/svgs/Redis";
import Shadcn from "@/components/ui/svgs/Shadcn";
import SQL from "@/components/ui/svgs/SQL";
import Tailwind from "@/components/ui/svgs/Tailwind";
import Vercel from "@/components/ui/svgs/Vercel";
import Zustland from "@/components/ui/svgs/Zustland";
import Tanstack from "@/components/ui/svgs/Tanstack";
import AWS from "@/components/ui/svgs/AWS";

export const DATA = {
  name: "Jay Vaidya",
  initials: "JV",
  url: "https://jayvaidya.site",
  location: "",
  locationLink: "",
  description: "Full-stack and DevOps engineer",
  summary:
    "Full-stack engineer and cracked developer obsessed with clean, maintainable code and diving deep into security to understand the internet from the ground up.",
  avatarUrl: "/pfp.svg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Javascript", icon: Javascript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "Redis", icon: Redis },
    { name: "SQL", icon: SQL },
    { name: "ExpressJS", icon: ExpressJs },
    { name: "Prisma", icon: Prisma },
    { name: "Tailwind", icon: Tailwind },
    { name: "Shadcn", icon: Shadcn },
    { name: "Git", icon: Git },
    { name: "GitHub", icon: Github },
    { name: "Postman", icon: Postman },
    { name: "Figma", icon: Figma },
    { name: "Zustand", icon: Zustland },
    { name: "Tanstack", icon: Tanstack },
    { name: "AWS", icon: AWS },
    { name: "Docker", icon: Docker },
    { name: "Vercel", icon: Vercel },
    { name: "Linux", icon: Linux },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jayvaidya30@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jayvaidya30",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jayvaidya30/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/jayvaidya30",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jayvaidya30@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "SPPU University",
      href: "",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "",
      start: "2024",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Saas",
      href: "https://x.com/jayvaidya30",
      dates: "2025 - Present",
      active: true,
      description: "Building a SaaS to simplify hiring.",
      technologies: [
        "Next.js",
        "Hono",
        "Node.js",
        "PostgreSQL",
        "Tanstack Query",
        "FastAPI",
        "Python",
        "VectorDB",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
        "Zod",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://x.com/jayvaidya30",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/hiring-simplified.svg",
      video: "",
    },
    {
      title: "Drawly",
      href: "https://github.com/jayvaidya30/drawly",
      dates: "2024 - Present",
      active: true,
      description:
        "A simple, collaborative drawing app for creating hand-drawn style diagrams, wireframes, and sketches in real time.",
      technologies: [
        "WebSockets",
        "Next.js",
        "Turborepo",
        "TailwindCSS",
        "PostgreSQL",
        "TypeScript",
        "Node.js",
        "JWT",
        "Bcrypt",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/jayvaidya30/drawly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/drawly.svg",
      video: "",
    },
    {
      title: "Second-Brain",
      href: "https://github.com/jayvaidya30/Second-Brain-Frontend",
      dates: "2024 - Present",
      active: true,
      description:
        "A modern React + TypeScript frontend built with Vite for a Second Brain knowledge management system.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "Express.js",
        "JWT",
        "CORS",
        "Zod",
      ],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/jayvaidya30/Second-Brain-Frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/jayvaidya30/Second-Brain",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/brain-new.svg",
      video: "",
    },
    {
      title: "Chat-app",
      href: "https://github.com/jayvaidya30/chat-app",
      dates: "2024 - Present",
      active: true,
      description:
        "A TypeScript-based real-time chat application built using WebSockets for instant messaging between users.",
      technologies: ["WebSockets", "TypeScript", "Express.js", "Node.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/jayvaidya30/chat-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chat-app.svg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Gemini 3 / Google DeepMind Hackathon",
      dates: "2026",
      location: "Online",
      description:
        "FraudEx analyzes financial documents to detect anomalies and risk indicators using transparent, explainable forensic techniques.",
      image:
        "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/jayvaidya30/fraud-ex-stable",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gemini3.devpost.com",
        },
      ],
    },
  ],
} as const;
