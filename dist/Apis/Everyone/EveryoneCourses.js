import { CourseCategory, PageSettingName } from "../../Persistence/Data/Constraints";
import { getCourseGroupTitle } from "../../Helpers/Humaniser";
import { mapCourseCard } from "../../Mappers/CourseMapper";
import { getCourseColor } from "../../Persistence/CoursePageSettingRepository";
import { getCoursesByCategory } from "../../Persistence/CourseRepository";
export default async () => {
    const courseResponseTask = getCoursesByCategory({
        courseCategory: CourseCategory.Everyone,
    });
    const pageSettingTask = getCourseColor(PageSettingName.Everyone);
    const courseResponse = await courseResponseTask;
    const pageSetting = await pageSettingTask;
    return {
        courseCardColor: pageSetting?.color ?? '',
        courseGroupTitle: getCourseGroupTitle(CourseCategory.Everyone, courseResponse),
        courses: courseResponse.map(mapCourseCard),
    };
};
