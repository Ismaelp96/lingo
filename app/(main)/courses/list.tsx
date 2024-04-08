'use client';

import { courses } from '@/db/schema';
import { CardCourses } from './card';

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export const ListCourses = ({ courses, activeCourseId }: Props) => {
  return (
    <div className='pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4'>
      {courses.map((course) => (
        <CardCourses
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
