import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import aipromt from '@/public/ai-prompt.png';
import filmpire from '@/public/filmpire.png';
import realtor from '@/public/realtor.png';
import airbnb from '@/public/airbnb.png';
import cotion from '@/public/cotion.png';
import inventory from '@/public/inventory.png';
import mapty from '@/public/mapty.png';
import taskify from '@/public/taskify.png';
import unplug from '@/public/unplug.png';
import lms from '@/public/lms.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'React/NextJs Developer',
    location: 'Home',
    description:
      'Engaged in Javascript mastery courses to enhance and developed critical thinking. Created a projects using Javascript, Reactjs, and NextJs. Expanded knowledge and keep up to date of the latest technology',
    icon: React.createElement(FaReact),
    date: '2023-current',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Palawan, Ph',
    description:
      'I worked as a web developer that developed and administrate a journal website for researchers paper submission, Improved the university visibility in the web and help Teachers and student in paper submission. Also able to work with C# to develop a local database of the researches.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2022',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Palawan, Ph',
    description:
      'I worked in a Real estate listing property where I developed a website using HTML, CSS, and Javascript. Played a role in ranking the website using SEO tips, also handled a cms to develop a website. Administrate and improved performance that help user experience',
    icon: React.createElement(TbBrandJavascript),
    date: '2018-2019',
  },
] as const;

export const projectsData = [
  {
    title: 'Taskify SAAS',
    description:
      'Create Boards, lists, and cards using taskify (software as a service) with free 5 boards. Ungrade to pro to create more.',
    tags: [
      'Reactjs',
      'Nextjs',
      'Typescript',
      'Tailwind',
      'Clerk auth',
      'Prisma',
      'mongodb',
    ],
    imageUrl: taskify,
    url: 'https://taskify-saas.vercel.app/',
  },
  {
    title: 'Cotion SAAS',
    description:
      'A software as a service tool to create your note, task and many more. With unlimited pages and soft delete.',
    tags: ['React', 'Nextjs', 'Tailwind', 'Typescript', 'Clerk auth', 'convex'],
    imageUrl: cotion,
    url: 'https://cotion-text-app.vercel.app/',
  },
  {
    title: 'Unplug chat',
    description:
      'An app to create your own server and discussions. Register now and try it free',
    tags: [
      'React',
      'Nextjs',
      'Tailwind',
      'ShadcnUI',
      'Typescript',
      'Clerk auth',
      'MySql',
    ],
    imageUrl: unplug,
    url: 'https://uplug-chat.vercel.app/',
  },
  {
    title: 'Learning management system',
    description:
      'A web app developed using nextjs. A learning management system like udemy where student can enroll to a course and track their progress',
    tags: [
      'React',
      'Nextjs',
      'Typescript',
      'Tailwind',
      'Clerk auth',
      'MongoDB',
      'Prisma',
    ],
    imageUrl: lms,
    url: 'https://lms-project-flame.vercel.app/',
  },
  {
    title: 'Airbnb Clone',
    description:
      'A web app developed using nextjs. An Airbnb Clone with auth and property posting.',
    tags: [
      'React',
      'Nextjs',
      'Typescript',
      'Tailwind',
      'Clerk auth',
      'MongoDB',
      'Prisma',
    ],
    imageUrl: lms,
    url: 'https://lms-project-flame.vercel.app/',
  },
  {
    title: 'Filmpire',
    description:
      'An app that is used to browse movies using TMDB API, I develop the app using Vanilla React.',
    tags: ['React', 'Redux toolkit', 'Tailwind', 'TMDBAPI', 'ALAN AI'],
    imageUrl: filmpire,
    url: 'https://filmpireaji.netlify.app/',
  },
  {
    title: 'Ai Prompter',
    description:
      'A helpful and useful prompt that is used by users all over the world and be able to share their own prompt for others',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux', 'MongoDB'],
    imageUrl: aipromt,
    url: 'https://project-promptopia-rust.vercel.app/',
  },
  {
    title: 'Inventory app',
    description:
      'An Inventory solution for stocks using Mongodb, ExpressJs, ReactJs, and NodeJs (MERN-stack).',
    tags: ['React', 'Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    imageUrl: inventory,
    url: 'https://mern-inventory-frontend.vercel.app/',
  },
  {
    title: 'Realtor Clone',
    description:
      'A listing website that is developed using react with the help of Firebase as authentication, database, and bucket storage.',
    tags: ['React', 'Tailwind', 'Firebase'],
    imageUrl: realtor,
    url: 'https://realtor-clone-ebon.vercel.app/',
  },
  {
    title: 'Mapty',
    description:
      'A Project developed while learning Javascript Beginner to Expert.',
    tags: ['Javascript', 'Leaflet'],
    imageUrl: mapty,
    url: 'https://mapty-almujahid.netlify.app/',
  },
];

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Express',
  'PostgreSQL',
  'Framer Motion',
] as const;
