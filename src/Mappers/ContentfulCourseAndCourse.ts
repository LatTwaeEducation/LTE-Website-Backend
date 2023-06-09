import { ContentfulCourseCardResponse } from '../Types/Courses/ContentfulCourseResponse';
import { CourseCard } from '../Types/CommonTypes';

export const convertToCourseCard = ({
  classCategory,
  duration,
  name,
  students,
  sys,
  thumbnail,
}: ContentfulCourseCardResponse): CourseCard => ({
  id: sys.id,
  name,
  duration,
  classCategory,
  students,
  thumbnail,
});
