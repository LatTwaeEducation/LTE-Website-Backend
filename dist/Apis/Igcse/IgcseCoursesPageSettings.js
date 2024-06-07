import { PageSettingName } from "../../Persistence/Data/Constraints";
import { mapCoursePageSetting } from "../../Mappers/CoursePageSettingMapper";
import { getCoursePageSettingById, getCoursePageSettingId } from "../../Persistence/CoursePageSettingRepository";
export default async () => {
    const pageId = await getCoursePageSettingId(PageSettingName.Igcse);
    if (!pageId) {
        return null;
    }
    const response = await getCoursePageSettingById(pageId);
    return mapCoursePageSetting(response);
};
