import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { ActiveContextProvider } from '@/providers/active-section-context';
import { ToastProvider } from '@/providers/toast-provider';
import { Footer } from '@/components/footer';
import { ThemeSwitch } from '@/components/theme-switch';
import { ThemeProvider } from '@/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Almujahid | Personal Portfolio',
  description: 'A full-stack developer with 5 year of experience',
  metadataBase: new URL('https://portfolio-firemelon96.vercel.app/'),
  openGraph: {
    title: 'Almujahid portfolio',
    description: 'Check out my portfolio, lets connect!',
  },
  twitter: {
    title: 'Almujahid portfolio',
    description: 'Check out my portfolio, lets connect!',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fb] absolute top-[-6rem] right-[20rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
        <ActiveContextProvider>
          <ThemeProvider>
            <Header />
            <ToastProvider />
            {children}
            <Footer />
            <ThemeSwitch />
          </ThemeProvider>
        </ActiveContextProvider>
      </body>
    </html>
  );
}
