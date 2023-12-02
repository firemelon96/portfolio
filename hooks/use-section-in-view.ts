import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from './use-active-section';
import { SectionName } from '@/lib/types';

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { setIsActive, timeOfLastClick } = useActiveSection();
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setIsActive(sectionName);
  }, [inView, setIsActive, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
