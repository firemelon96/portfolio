'use server';
export const sendEmail = async (formData: FormData) => {
  console.log(formData.get('senderEmail'));
  console.log(formData.get('message'));
  console.log('Running on server action');
};
