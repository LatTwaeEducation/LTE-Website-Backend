import { CourseCategory, PageSettingName } from '@data/Constraints';
import { CourseCardGroup } from '@domain/Course';
import { getCourseGroupTitle } from '@helpers/Humaniser';
import { mapCourseCard } from '@mappers/CourseMapper';
import { getCourseColor } from '@persistence/CoursePageSettingRepository';
import { getCoursesByCategory } from '@persistence/CourseRepository';

export default async (): Promise<CourseCardGroup> => {
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
