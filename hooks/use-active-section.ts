import { ActiveContext } from '@/providers/active-section-context';
import { useContext } from 'react';
export const useActiveSection = () => {
  const ctx = useContext(ActiveContext);

  if (ctx === null) {
    throw new Error('Context should be use inside the provider');
  }

  return ctx;
};
