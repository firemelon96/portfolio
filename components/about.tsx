'use client';
import { MotionDiv } from './motion-div';
import { SectionHeading } from './section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <section
      ref={ref}
      id="about"
      className="max-w-xl leading-7 mb-28 sm:mb-40 scroll-mt-28 p-3"
    >
      <MotionDiv delay={0.175}>
        <SectionHeading title="About me" />
        <p className="text-center text-neutral-600 text-xl dark:text-white/60">
          After graduating with a degree of Bachelor of science in Information
          Technology, I work in a Real estate company as a web developer. A year
          after, I transitioned into another company where i worked as a
          fullstack developer, and a wondows application developer for 3 years.
          It help me improved my problem solving and programming skills. At the
          time being I am focused on learning the new web technologies such as
          react, and nextjs.
        </p>
      </MotionDiv>
    </section>
  );
};
