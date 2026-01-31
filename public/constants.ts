import { ProjectStatus } from "./types";
import type { Project } from "./types";

const Project: Project[] = [
  {
    id: "1",
    title: "Saas",
    description: "Building a SaaS to simplify hiring.",
    imageUrl: "/hiring-simplified.svg",
    status: ProjectStatus.Building,
    repo: {
      type: "monorepo",
      url: "https://x.com/jayvaidya30",
    },
    demoUrl: "",
    tags: [
      "NextJS",
      "Hono",
      "NodeJS",
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
  },
  {
    id: "2",
    title: "Drawly",
    description:
      "A simple, collaborative drawing app for creating hand-drawn style diagrams, wireframes, and sketches in real time.",
    imageUrl: "/drawly.svg",
    status: ProjectStatus.Maintenance,
    repo: {
      type: "monorepo",
      url: "https://github.com/jayvaidya30/drawly",
    },
    demoUrl: "",
    tags: [
      "WebSockets",
      "NextJS",
      "Turborepo",
      "TailwindCSS",
      "PostgresSQL",
      "TypeScript",
      "NodeJS",
      "JWT",
      "Bcrypt",
    ],
  },
  {
    id: "3",
    title: "Second-Brain",
    description:
      "A modern React + TypeScript frontend built with Vite for a “Second Brain” knowledge management system.",
    imageUrl: "/brain-new.svg",
    status: ProjectStatus.Maintenance,
    repo: {
      type: "separate",
      frontend: "https://github.com/jayvaidya30/Second-Brain-Frontend",
      backend: "https://github.com/jayvaidya30/Second-Brain",
    },
    demoUrl: "",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "JavaScript",
      "NodeJS",
      "MonogoDB",
      "Mongoose",
      "ExpressJS",
      "JWT",
      "CORS",
      "Zod",
    ],
  },
  {
    id: "4",
    title: "Chat-app",
    description:
      "chat-app is a TypeScript-based real-time chat application built using WebSockets for instant messaging between users.",
    imageUrl: "/chat-app.svg",
    status: ProjectStatus.Maintenance,
    repo: { type: "monorepo", url: "https://github.com/jayvaidya30/chat-app" },
    demoUrl: "",
    tags: ["WebSockets", "TypeScript", "ExpressJS", "NodeJS"],
  },
];

export default Project;
