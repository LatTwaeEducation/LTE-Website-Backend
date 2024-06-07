import { CourseCategory, PageSettingName } from "../../Persistence/Data/Constraints";
import { getCourseGroupTitle } from "../../Helpers/Humaniser";
import { mapCourseCard } from "../../Mappers/CourseMapper";
import { getCourseColor } from "../../Persistence/CoursePageSettingRepository";
import { getCoursesByCategory } from "../../Persistence/CourseRepository";
export default async () => {
    const coursesTask = getCoursesByCategory({
        courseCategory: CourseCategory.Junior,
    });
    const pageSettingTask = getCourseColor(PageSettingName.JuniorYouth);
    const courses = await coursesTask;
    const pageSetting = await pageSettingTask;
    return {
        courseCardColor: pageSetting?.color ?? '',
        courseGroupTitle: getCourseGroupTitle(CourseCategory.Junior, courses),
        courses: courses.map(mapCourseCard),
    };
};
