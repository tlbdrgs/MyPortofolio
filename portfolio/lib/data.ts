import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tutorials from "../public/tutorials.png";
import addresses from "../public/fakeAddresses.png";
import workspace from "../public/workspace.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },

] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tutorial Manger",
    description:
      "One of my first projects. Created in my first year of University. It's a c++ app that manages tutorials. It has features like adding, deleting, updating and creating watchlists.",
    tags: ["C++", "Github", "OOP"],
    imageUrl: tutorials,
  },
  {
    title: "Fake Address Generator",
    description:
      "An app developed in the second year of University. It is a CRUD for 2 entities: Addresses and People. It uses a REST API and a SQL database.",
    tags: ["React", "NodeJS", "SqlServer", "Git"],
    imageUrl: addresses,
  },
  {
    title: "This website :)",
    description:
      "A portfolio created with Next.js. It has a clean and smooth design. ",
    tags: ["React", "Next.js", "Tailwind", "Framer motion", "TypeScript"],
    imageUrl: workspace,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "C++",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Express",
  "Python",
  "Framer Motion",
] as const;

export const profilePicUrl = "https://media.licdn.com/dms/image/D4E03AQF0XSzjXPsPBg/profile-displayphoto-shrink_800_800/0/1717622223549?e=1723680000&v=beta&t=f1MHdTxWxir7yzpkiBBSG4bKZnHyZSvAwUxJVJA3NWg"