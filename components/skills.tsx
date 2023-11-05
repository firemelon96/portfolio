'use client';
import { skillsData } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export const Skills = () => {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      ref={ref}
      id='skills'
      className='mb-28 max-w-2xl scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading title='My skills' />

      <ul className='flex flex-wrap text-center justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
