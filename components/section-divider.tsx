'use client';
import { MotionDiv } from './motion-div';

export const SectionDivider = () => {
  return (
    <MotionDiv
      delay={0.125}
      className='hidden sm:block w-1 h-16 bg-gray-200 my-24 rounded-full'
    ></MotionDiv>
  );
};
