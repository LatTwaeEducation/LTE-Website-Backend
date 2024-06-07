import { PageSettingName } from "../../Persistence/Data/Constraints";
import { mapCoursePageSetting } from "../../Mappers/CoursePageSettingMapper";
import { getCoursePageSettingById, getCoursePageSettingId } from "../../Persistence/CoursePageSettingRepository";
export default async () => {
    const settingId = await getCoursePageSettingId(PageSettingName.Everyone);
    if (!settingId) {
        return null;
    }
    const response = await getCoursePageSettingById(settingId);
    return mapCoursePageSetting(response);
};
