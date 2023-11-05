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

export const Experience = () => {
  const { ref } = useSectionInView('Experience');

  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading title='My experience' />
      <VerticalTimeline lineColor=''>
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: 'white',
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
