import { queryData } from '../../Services/ContentfulServices';
import { ContentfulIgcseCoursesPageSetting } from '../../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
import { EntryId } from '../../Types/CommonTypes';
import { IgcseCoursesPageSettings } from '../../Types/CoursesPageSettings/IgcseCoursesPageSettings';
import { ContentfulCoursePageSettings } from '../../Types/Courses/ContentfulCourseResponses';

export default async (): Promise<IgcseCoursesPageSettings> => {
  const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forIgcseCoursesPageTitle
      forIgcseCoursesPageBody
    }
  }`;

  const { coursePageSettings } = await queryData<ContentfulCoursePageSettings<ContentfulIgcseCoursesPageSetting>>(
    queryString,
    {
      coursesPageSettingsId: EntryId.CoursesPageSettings,
    }
  );

  return new IgcseCoursesPageSettings(coursePageSettings);
};
