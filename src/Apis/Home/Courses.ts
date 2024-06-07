import { CourseCategory, PageSettingName } from '@data/Constraints';
import { AllCoursesAndSettings } from '@domain/Home';
import { getCourseColor } from '@persistence/CoursePageSettingRepository';
import { getCourseNamesByCategory } from '@persistence/CourseRepository';

export default async (): Promise<AllCoursesAndSettings> => {
  const juniorCoursesTask = getCourseNamesByCategory(CourseCategory.Junior);
  const youthCoursesTask = getCourseNamesByCategory(CourseCategory.Youth);
  const everyoneCoursesTask = getCourseNamesByCategory(CourseCategory.Everyone);
  const igcseCoursesTask = getCourseNamesByCategory(CourseCategory.IGCSE);

  const juniorYouthColorTask = getCourseColor(PageSettingName.JuniorYouth);
  const everyoneColorTask = getCourseColor(PageSettingName.JuniorYouth);
  const igcseColorTask = getCourseColor(PageSettingName.JuniorYouth);

  const juniorYouthColor = await juniorYouthColorTask;
  const everyoneColor = await everyoneColorTask;
  const igcseColor = await igcseColorTask;

  return {
    juniorCourses: await juniorCoursesTask,
    youthCourses: await youthCoursesTask,
    everyoneCourses: await everyoneCoursesTask,
    igcseCourses: await igcseCoursesTask,
    juniorCoursesColour: juniorYouthColor?.color ?? '',
    youthCoursesColour: juniorYouthColor?.secondaryColor ?? '',
    everyoneCoursesColour: everyoneColor?.color ?? '',
    igcseCoursesColour: igcseColor?.color ?? '',
  };
};
