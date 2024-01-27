import { queryData } from '../../Services/ContentfulServices';
import { ContentfulEveryoneCoursesPageSetting } from '../../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
import { EntryId } from '../../Types/CommonTypes';
import { EveryoneCoursesPageSettings } from '../../Types/CoursesPageSettings/EveryoneCoursesPageSettings';
import { ContentfulCoursePageSettings } from '../../Types/Courses/ContentfulCourseResponses';

export default async (): Promise<EveryoneCoursesPageSettings> => {
  const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forEveryoneCoursesPageTitle
      forEveryoneCoursesPageBody
    }
  }`;

  const { coursePageSettings } = await queryData<ContentfulCoursePageSettings<ContentfulEveryoneCoursesPageSetting>>(
    queryString,
    {
      coursesPageSettingsId: EntryId.CoursesPageSettings,
    }
  );

  return new EveryoneCoursesPageSettings(coursePageSettings);
};
