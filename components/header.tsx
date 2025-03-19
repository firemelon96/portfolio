'use client';
import { useActiveSection } from '@/hooks/use-active-section';
import { links } from '@/lib/data';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Header = () => {
  const { isActive, setIsActive, setTimeOfLastClick } = useActiveSection();
  // const [active, setActive] = useState('Home');
  return (
    <header className='relative z-[999]'>
      <motion.div
        className='fixed top-0 left-1/2 h-[5.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className='h-3/4 flex items-center justify-center '
              key={link.name}
            >
              <Link
                className={clsx(
                  'flex w-full items-center justify-center p-3 hover:text-gray-950 transition relative dark:text-gray-500 dark:hover:text-gray-300',
                  { 'text-gray-950 dark:text-gray-200': isActive === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setIsActive(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === isActive && (
                  <motion.span
                    className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                    layoutId='activeLink'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
