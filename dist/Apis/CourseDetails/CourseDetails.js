import { mapCourseDetail } from "../../Mappers/CourseMapper";
import { getCourseById } from "../../Persistence/CourseRepository";
export default async (courseId) => {
    const response = await getCourseById(courseId);
    return mapCourseDetail(response);
};
