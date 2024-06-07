import { CourseCategory, PageSettingName } from "../../Persistence/Data/Constraints";
import { getCourseGroupTitle } from "../../Helpers/Humaniser";
import { mapCourseCard } from "../../Mappers/CourseMapper";
import { getCourseColor } from "../../Persistence/CoursePageSettingRepository";
import { getCoursesByCategory } from "../../Persistence/CourseRepository";
export default async () => {
    const coursesTask = getCoursesByCategory({
        courseCategory: CourseCategory.Youth,
    });
    const pageSettingTask = getCourseColor(PageSettingName.JuniorYouth);
    const courses = await coursesTask;
    const pageSetting = await pageSettingTask;
    return {
        courseCardColor: pageSetting?.secondaryColor ?? pageSetting?.color ?? '',
        courseGroupTitle: getCourseGroupTitle(CourseCategory.Youth, courses),
        courses: courses.map(mapCourseCard),
    };
};
