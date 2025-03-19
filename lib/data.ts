import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import solteros from '@/public/solteros.webp';
import palawenyo from '@/public/palawenyo.webp';
import clarkkent from '@/public/clarkkent.webp';
import allinImage from '@/public/allinfreediving.webp';
import icapture from '@/public/icapture.webp';
import cliffandwaves from '@/public/cliffandwaves.webp';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
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
    title: 'All in Freediving and Tour Services',
    description:
      'A travel agency based in Coron, Palawan, specializing in tours and freediving activities.',
    tags: ['Reactjs', 'Nextjs', 'Typescript', 'Tailwind', 'Shadcn ui'],
    imageUrl: allinImage,
    url: 'https://www.allinfreedivingandtourservices.com/',
  },
  {
    title: 'Clark Kent Travel and Tour Services',
    description:
      'A travel agency offering guided tours, comfortable accommodations, and convenient motorcycle and car rentals for a seamless travel experience.',
    tags: ['Reactjs', 'Nextjs', 'Typescript', 'Tailwind'],
    imageUrl: clarkkent,
    url: 'https://www.clarkkenttravelandtours.com/',
  },
  {
    title: 'Palawenyo Travel and Tours',
    description:
      'A travel agency in Coron offering curated travel packages for an unforgettable experience.',
    tags: ['React', 'Nextjs', 'Typescript', 'Tailwind'],
    imageUrl: palawenyo,
    url: 'https://www.palawenyotravelandtours.com/',
  },
  {
    title: 'I Capture Travel Services',
    description:
      'A travel agency based in Coron offering tours in Puerto Princesa, El Nido, and Coron, with the flexibility to customize your own travel experience.',
    tags: ['React', 'Nextjs', 'Typescript', 'Tailwind'],
    imageUrl: icapture,
    url: 'https://www.icapturetravelservices.com/',
  },
  {
    title: 'Cliff and Waves Travel and Tours',
    description:
      'A travel agency located in Roxas, Palawan, offering tours and customized travel packages.',
    tags: ['React', 'Nextjs', 'Typescript', 'Tailwind'],
    imageUrl: cliffandwaves,
    url: 'https://www.cliffandwavestravelandtours.com/',
  },
  {
    title: 'Solteros Travel and Tours',
    description:
      'A travel agency located in Puerto Princesa offering package tours and day trips.',
    tags: ['React', 'Nextjs', 'Typescript', 'Tailwind'],
    imageUrl: solteros,
    url: 'https://solteros-travel.vercel.app/',
  },
];

export const skillsData = [
  'ReactJs',
  'NextJs',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Tailwind css',
  'Shadcn ui',
  'Prisma',
  'MongoDB',
  'REST API',
  'Redux',
  'Express',
  'PostgreSQL',
  'Git',
  'On-Page SEO',
  'Drizzle ORM',
] as const;
