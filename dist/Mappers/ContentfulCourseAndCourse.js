import { CourseCard } from '../Types/Courses/CourseCard';
export function convertToCourseCards(src) {
    return src.courseCollection.items.map((course) => new CourseCard(course));
}
