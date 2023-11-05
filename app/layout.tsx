import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { ActiveContextProvider } from '@/providers/active-section-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Almujahid | Personal Portfolio',
  description: 'A full-stack developer with 5 year of experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className='bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]' />
        <div className='bg-[#dbd7fb] absolute top-[-6rem] right-[20rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]' />
        <ActiveContextProvider>
          <Header />
          {children}
        </ActiveContextProvider>
      </body>
    </html>
  );
}
