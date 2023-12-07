'use client';

import { SectionHeading } from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { sendEmail } from '@/actions/send-email';
import { ButtonSubmit } from './button-submit';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (formData: FormData) => {
    console.log('running on client');
    const { data, error } = await sendEmail(formData);
    console.log(data);
    if (error) return toast.error('Error');

    formRef.current?.reset();
    return toast.success('Email sent');
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 p-3 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading title="Contact me" />
      <p>
        Please contact me directly at{' '}
        <a className="underline" href="mailto:estong.jamion@gmail.com">
          estong.jamion@gmail.com
        </a>{' '}
        or through this form
      </p>

      <form
        ref={formRef}
        className="flex flex-col gap-3 mt-10 dark:text-black"
        action={onSubmit}
      >
        <input
          name="senderEmail"
          type="email"
          placeholder="Email"
          required
          className="h-14 rounded-lg borderBlack p-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          placeholder="Your message"
          name="message"
          id="message"
        ></textarea>
        <ButtonSubmit />
      </form>
    </motion.section>
  );
};
