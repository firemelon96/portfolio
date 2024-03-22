'use client';
import Image from 'next/image';
import { MotionDivImage } from './motion-div-image';
import { MotionDiv } from './motion-div';
import Link from 'next/link';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { useActiveSection } from '@/hooks/use-active-section';

export const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setIsActive, setTimeOfLastClick } = useActiveSection();

  return (
    <section ref={ref} id='home' className='scroll-mt-36 p-3'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <MotionDivImage type='tween'>
            <Image
              src='/1x1.png'
              alt='Profile image'
              width='192'
              height='192'
              quality='95'
              priority
              className='h-24 w-24 rounded-full border-[0.34rem] object-cover border-white'
            />
          </MotionDivImage>
          <MotionDivImage
            type='spring'
            delay={0.1}
            duration={0.7}
            stiffness={125}
          >
            <span className='text-4xl absolute right-0 bottom-0'>👋</span>
          </MotionDivImage>
        </div>
      </div>
      <MotionDiv className='flex flex-col items-center justify-center mt-5'>
        <h1 className='text-3xl text-center'>
          Hello my name is <strong>Almujahid Jamion</strong>
        </h1>
        <p className='text-2xl text-center max-w-lg text-gray-700 leading-[1.3] dark:text-white/60'>
          I am a Fullstack developer with 4 years of experience in web
          development. I always finds it challenging and enjoyable to craft a
          web app and to read someone else code.
        </p>
      </MotionDiv>
      <MotionDiv
        delay={0.1}
        className='flex flex-col sm:flex-row gap-3 items-center justify-center mt-5 text-lg font-medium'
      >
        <Link
          href='#contact'
          className='bg-gray-900 group text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-100 transition'
          onClick={() => {
            setIsActive('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <FaArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a
          href='/cv.pdf'
          download
          className='group bg-white text-gray-950 rounded-full px-7 py-3 flex items-center gap-2 hover:scale-110 active:scale-100 transition border border-black/10 dark:bg-white/10 dark:text-white/60'
        >
          Download CV{' '}
          <FaDownload className='opacity-70 group-hover:animate-bounce' />
        </a>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/almujahid-jamion-fullstack-web-developer/'
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full active:scale-100 transition border border-black/10 hover:scale-[1.15] hover:text-gray-950 dark:bg-white/10 dark:text-white/60'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/firemelon96'
          target='_blank'
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full active:scale-100 transition border border-black/10 hover:scale-[1.15] hover:text-gray-950 dark:bg-white/10 dark:text-white/60'
        >
          <FaGithub />
        </a>
      </MotionDiv>
    </section>
  );
};
