'use client';
import { motion } from 'framer-motion';

interface MotionDivProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MotionDiv = ({ children, className, delay }: MotionDivProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay || undefined,
      }}
    >
      {children}
    </motion.div>
  );
};
