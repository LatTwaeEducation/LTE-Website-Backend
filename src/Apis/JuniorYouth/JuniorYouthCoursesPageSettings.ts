import { PageSettingName } from '@data/Constraints';
import { CoursePageSetting } from '@domain/CoursePageSetting';
import { mapCoursePageSetting } from '@mappers/CoursePageSettingMapper';
import { getCoursePageSettingById, getCoursePageSettingId } from '@persistence/CoursePageSettingRepository';

export default async (): Promise<CoursePageSetting | null> => {
  const pageId = await getCoursePageSettingId(PageSettingName.JuniorYouth);
  if (!pageId) {
    return null;
  }

  const response = await getCoursePageSettingById(pageId);
  return mapCoursePageSetting(response);
};
