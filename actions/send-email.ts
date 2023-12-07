'use server';

import { Resend } from 'resend';
import { getErrorMessage, validateString } from '@/lib/utils';
import { ContactFormEmail } from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const sender = formData.get('senderEmail');
  const message = formData?.get('message');

  if (!validateString(sender)) {
    return {
      error: 'Invalide inputs',
    };
  }
  if (!validateString(message)) {
    return {
      error: 'Invalide message',
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'estong.jamion@gmail.com',
      subject: 'Message from Portfolio contact form',
      // text: message as string,
      reply_to: sender as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: sender as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
