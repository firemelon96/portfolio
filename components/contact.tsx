'use client';

import { FaPaperPlane } from 'react-icons/fa';
import { SectionHeading } from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { sendEmail } from '@/actions/send-email';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading title='Contact me' />
      <p>
        Please contact me deirectly at{' '}
        <a className='underline' href='mailto:example@gmail.com'>
          example@gmail.com
        </a>{' '}
        or through this form
      </p>

      <form
        className='flex flex-col gap-3 mt-10'
        action={async (formData) => {
          console.log('running on client');
          await sendEmail(formData);
        }}
      >
        <input
          name='senderEmail'
          type='email'
          placeholder='Email'
          className='h-14 rounded-lg borderBlack p-3'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-3'
          placeholder='Your message'
          name='message'
          id='message'
        ></textarea>
        <button
          className='group flex items-center justify-center gap-3 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'
          type='submit'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ' />
        </button>
      </form>
    </motion.section>
  );
};
