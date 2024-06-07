import { CourseCategory, PageSettingName } from "../../Persistence/Data/Constraints";
import { getCourseGroupTitle } from "../../Helpers/Humaniser";
import { mapCourseCard } from "../../Mappers/CourseMapper";
import { getCourseColor } from "../../Persistence/CoursePageSettingRepository";
import { getCoursesByCategory } from "../../Persistence/CourseRepository";
export default async () => {
    const coursesTask = getCoursesByCategory({
        courseCategory: CourseCategory.IGCSE,
    });
    const pageSettingTask = getCourseColor(PageSettingName.Igcse);
    const courses = await coursesTask;
    const pageSetting = await pageSettingTask;
    return {
        courseCardColor: pageSetting?.color ?? '',
        courseGroupTitle: getCourseGroupTitle(CourseCategory.IGCSE, courses),
        courses: courses.map(mapCourseCard),
    };
};
