'use client';
import { motion } from 'framer-motion';

interface MotionDivImageProps {
  children: React.ReactNode;
  type: string;
  delay?: number;
  duration?: number;
  stiffness?: number;
}

export const MotionDivImage = ({
  children,
  type,
  delay,
  duration,
  stiffness,
}: MotionDivImageProps) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: type,
        duration: duration ? duration : undefined,
        delay: delay ? delay : undefined,
        stiffness: stiffness ? stiffness : undefined,
      }}
    >
      {children}
    </motion.div>
  );
};
