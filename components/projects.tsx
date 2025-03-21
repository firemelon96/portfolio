'use client';
import { projectsData } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { ProjectItem } from './project-item';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { MotionDiv } from './motion-div';

export const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <MotionDiv delay={0.2}>
        <SectionHeading title='My Projects' />

        <div className='grid grid-cols-1 md:grid-cols-3'>
          {projectsData.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              url={project.url}
            />
          ))}
        </div>
      </MotionDiv>
    </section>
  );
};
