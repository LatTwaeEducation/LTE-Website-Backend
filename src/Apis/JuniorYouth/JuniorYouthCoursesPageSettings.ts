import { queryData } from '../../Services/ContentfulServices';
import { ContentfulJuniorYouthCoursesPageSettings } from '../../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
import { EntryId } from '../../Types/CommonTypes';
import { JuniorYouthCoursesPageSettings } from '../../Types/CoursesPageSettings/JuniorYouthCoursesPageSettings';
import { ContentfulCoursePageSettings } from '../../Types/Courses/ContentfulCourseResponses';

export default async (): Promise<JuniorYouthCoursesPageSettings> => {
  const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forJuniorYouthCoursesPageTitle
      forJuniorYouthCoursesPageBody
      forJuniorYouthCoursesPageRoadmap {
        url
        title
      }
    }
  }`;

  const { coursePageSettings } = await queryData<
    ContentfulCoursePageSettings<ContentfulJuniorYouthCoursesPageSettings>
  >(queryString, {
    coursesPageSettingsId: EntryId.CoursesPageSettings,
  });

  return new JuniorYouthCoursesPageSettings(coursePageSettings);
};
