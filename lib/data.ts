import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import aipromt from '@/public/ai-prompt.png';
import ecommerce from '@/public/ecommerce.png';
import filmpire from '@/public/filmpire.png';
import realtor from '@/public/realtor.png';

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
    title: 'Ecommerce',
    description:
      'A fully functioning multi-vendor ecommerce store developed using Nextjs and reactjs that user can create and list their product',
    tags: ['React', 'Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    imageUrl: ecommerce,
    url: 'https://filmpireaji.netlify.app/',
  },
  {
    title: 'Realtor Clone',
    description:
      'A listing website that is developed using react with the help of Firebase as authentication, database, and bucket storage.',
    tags: ['React', 'Tailwind', 'Firebase'],
    imageUrl: realtor,
    url: 'https://realtor-clone-ebon.vercel.app/',
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
