'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
}

export const ProjectItem = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectItemProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        scrollBehavior: 'smooth',
      }}
      ref={ref}
      className='group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-6 last:mb-0 rounded-lg hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 m-3'
    >
      <div className='px-5 py-4 sm:pl-10 sm:pr-2 flex flex-col h-full sm:group-even:ml-[20rem] gap-2 sm:pt-10 sm:max-w-[50%]'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700 dark:text-white'>
          {description}
        </p>
        <ul className='flex flex-wrap gap-2 mt-4'>
          {tags.map((tag, index) => (
            <li
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className='absolute hidden sm:block top-12 -right-48 w-3/4 shadow-2xl rounded-t-md group-even:right-[initial] group-even:-left-48 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-110 transition group-even:group-hover:rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3'
      />
    </motion.section>
  );
};
