'use client';
import type { SectionName } from '@/lib/types';
import React, { useState, createContext } from 'react';

interface ActiveContextProps {
  children: React.ReactNode;
}

interface ActiveSectionType {
  isActive: SectionName;
  setIsActive: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveContext = createContext<ActiveSectionType | null>(null);

export const ActiveContextProvider = ({ children }: ActiveContextProps) => {
  const [isActive, setIsActive] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveContext.Provider
      value={{ isActive, setIsActive, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveContext.Provider>
  );
};
