'use client';
import { MotionDiv } from './motion-div';
import { SectionHeading } from './section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <section
      ref={ref}
      id='about'
      className='max-w-lg leading-7 mb-28 sm:mb-40 scroll-mt-28'
    >
      <MotionDiv delay={0.175}>
        <SectionHeading title='About me' />
        <p className='text-center text-xl'>
          After graduating with a degree of Bachelor of science in Information
          Technology, I decided to work in a Real estate company as a web
          developer. I transitioned into another company where i worked as a
          fullstack developer and <strong>TODO: edit the about me</strong>
        </p>
      </MotionDiv>
    </section>
  );
};
