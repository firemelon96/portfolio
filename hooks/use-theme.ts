import { Theme } from '@/providers/theme-provider';
import { useContext } from 'react';

export const useTheme = () => {
  const themeCtx = useContext(Theme);

  if (themeCtx === null) {
    throw new Error('Context should be use inside the provider');
  }
  return themeCtx;
};
