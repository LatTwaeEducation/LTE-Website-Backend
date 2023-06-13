import {
  ContentfulCourseCardResponse,
  ContentfulCoursesPageResponse,
} from '../Types/Courses/ContentfulCourseResponses';
import { CourseCard } from '../Types/Courses/CourseCard';

export function convertToCourseCards(src: ContentfulCoursesPageResponse<ContentfulCourseCardResponse>) {
  return src.courseCollection.items.map((course) => new CourseCard(course));
}
