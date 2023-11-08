'use client';

import React, { Fragment } from 'react';
import { SectionHeading } from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { tree } from 'next/dist/build/templates/app-page';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { useTheme } from '@/hooks/use-theme';

export const Experience = () => {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading title='My experience' />
      <VerticalTimeline lineColor=''>
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255,255,255,0.5)',
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255,255,255,0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='vertical-timeline-element-title'>
                {experience.title}
              </h3>
              <p>{experience.location}</p>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
