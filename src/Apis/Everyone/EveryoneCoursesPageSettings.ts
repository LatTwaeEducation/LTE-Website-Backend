import { PageSettingName } from '@data/Constraints';
import { CoursePageSetting } from '@domain/CoursePageSetting';
import { mapCoursePageSetting } from '@mappers/CoursePageSettingMapper';
import { getCoursePageSettingById, getCoursePageSettingId } from '@persistence/CoursePageSettingRepository';

export default async (): Promise<CoursePageSetting | null> => {
  const settingId = await getCoursePageSettingId(PageSettingName.Everyone);
  if (!settingId) {
    return null;
  }
  const response = await getCoursePageSettingById(settingId);
  return mapCoursePageSetting(response);
};
