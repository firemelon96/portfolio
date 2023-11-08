'use client';

import { useTheme } from '@/hooks/use-theme';
import { BsMoon, BsSun } from 'react-icons/bs';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='fixed bottom-5 right-5 bg-white w-12 h-12 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 flex justify-center items-center rounded-full shadow-2xl hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 '
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};
