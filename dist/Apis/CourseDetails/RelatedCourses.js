import { CourseCategory } from "../../Persistence/Data/Constraints";
import { mapCourseCard } from "../../Mappers/CourseMapper";
import { getCoursesByCategory } from "../../Persistence/CourseRepository";
const parseEnum = (courseCategory) => {
    return CourseCategory[courseCategory];
};
export default async (relatedCategory) => {
    const response = await getCoursesByCategory({
        courseCategory: parseEnum(relatedCategory),
        limit: 3,
    });
    return response.map(mapCourseCard);
};
