import React from "react";
import { LuGraduationCap, LuUserPlus } from "react-icons/lu";
import hotelSeeker from "../public/hotelSeeker.png";
import addresses from "../public/fakeAddresses.png";
import workspace from "../public/workspace.jpg";
import avatar from "../public/avatar1.png";

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
    title: "Graduated highschool",
    location: "Targu Jiu, Romania",
    description:
      "I graduated highschool with a focus on math and computer science. I also participated in programming contests.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "University",
    location: "Cluj-Napoca, Romania",
    description:
      "I'm currently studying Computer Science at Babes-Bolyai University. I'm in my third year and I'm enjoying it. I've learned a lot of things and I'm looking forward to learning more.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025 (expected)",
  },
  {
    title: "Searching for opportunities",
    location: "?",
    description:
      "I'm looking for internships and opportunities to learn and grow. I'm interested in web development and I'm looking forward to working on interesting projects.",
    icon: React.createElement(LuUserPlus),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "HotelSeeker",
    description:
      "A single-page hotel booking app built with React and Java, featuring location-based search, secure JWT authentication, and PostgreSQL for data management.",
    tags: ["React", "Java", "PostgreSQL", "JWT", "Flyway", "JavaScript"],
    imageUrl: hotelSeeker,
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

export const profilePicUrl = avatar;