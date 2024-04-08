'use client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { courses, userProgress } from '@/db/schema';
import { CardCourses } from './card';
import { upsertUserProgress } from '@/actions/user-progress';
import { toast } from 'sonner';

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const ListCourses = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();

  const [pending, startTransiton] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push('/learn');
    }

    startTransiton(() => {
      upsertUserProgress(id).catch(() => toast.error('Something went wrong.'));
    });
  };

  return (
    <div className='pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4'>
      {courses.map((course) => (
        <CardCourses
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
