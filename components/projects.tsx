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

        <div>
          {projectsData.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </MotionDiv>
    </section>
  );
};
