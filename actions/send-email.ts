'use server';

import { Resend } from 'resend';
import { getErrorMessage, validateString } from '@/lib/utils';
import { ContactFormEmail } from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (prevState: any, formData: FormData) => {
  const email = formData.get('senderEmail');
  const message = formData.get('message');
  if (!validateString(email)) {
    return {
      success: false,
      message: 'Invalide inputs',
    };
  }
  if (!validateString(message)) {
    return {
      success: false,
      message: 'Invalide message',
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'estong.jamion@gmail.com',
      subject: 'Message from Portfolio contact form',
      // text: message as string,
      replyTo: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    success: true,
    message: 'Email sent successfully!',
    data,
  };
};
