import { CourseCategory, PageSettingName } from '@data/Constraints';
import { CourseCardGroup } from '@domain/Course';
import { getCourseGroupTitle } from '@helpers/Humaniser';
import { mapCourseCard } from '@mappers/CourseMapper';
import { getCourseColor } from '@persistence/CoursePageSettingRepository';
import { getCoursesByCategory } from '@persistence/CourseRepository';

export default async (): Promise<CourseCardGroup> => {
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
