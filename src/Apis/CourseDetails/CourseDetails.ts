import { CourseDetail } from '@domain/Course';
import { mapCourseDetail } from '@mappers/CourseMapper';
import { getCourseById } from '@persistence/CourseRepository';

export default async (courseId: string): Promise<CourseDetail> => {
  const response = await getCourseById(courseId);
  return mapCourseDetail(response);
};
