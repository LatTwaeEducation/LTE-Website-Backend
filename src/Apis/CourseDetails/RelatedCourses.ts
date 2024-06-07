import { CourseCategory } from '@data/Constraints';
import { CourseCard } from '@domain/Course';
import { mapCourseCard } from '@mappers/CourseMapper';
import { getCoursesByCategory } from '@persistence/CourseRepository';

const parseEnum = (courseCategory: string): CourseCategory => {
  return CourseCategory[courseCategory as keyof typeof CourseCategory];
};

export default async (relatedCategory: string): Promise<CourseCard[]> => {
  const response = await getCoursesByCategory({
    courseCategory: parseEnum(relatedCategory),
    limit: 3,
  });

  return response.map(mapCourseCard);
};
