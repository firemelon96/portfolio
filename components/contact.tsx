'use client';

import { SectionHeading } from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { sendEmail } from '@/actions/send-email';
import { ButtonSubmit } from './button-submit';
import toast from 'react-hot-toast';
import { useActionState, useRef } from 'react';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const formRef = useRef<HTMLFormElement>(null);

  // const onSubmit = async (prev: any, formData: FormData) => {
  //   const email = formData?.get('senderEmail') as string;
  //   const message = formData?.get('message') as string;
  //   const { data, error } = await sendEmail(email, message);
  //   if (!data || error) return toast.error('Error');

  //   formRef.current?.reset();
  //   return toast.success('Email sent');
  // };
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 p-3 w-[min(100%, 38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading title='Contact me' />
      <p>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:estong.jamion@gmail.com'>
          estong.jamion@gmail.com
        </a>{' '}
        or through this form
      </p>

      <form
        action={formAction}
        ref={formRef}
        className='flex flex-col gap-3 mt-10 dark:text-black'
      >
        <input
          name='senderEmail'
          type='email'
          placeholder='Email'
          required
          disabled={isPending}
          className='h-14 rounded-lg borderBlack p-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          required
          disabled={isPending}
          placeholder='Your message'
          name='message'
          id='message'
        ></textarea>
        {state?.success && (
          <p className='p-2 bg-emerald-200 text-emerald-500'>{state.message}</p>
        )}
        {!state?.success && <p>{state?.message}</p>}
        <ButtonSubmit />
      </form>
    </motion.section>
  );
};
