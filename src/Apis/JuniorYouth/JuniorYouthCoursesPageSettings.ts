import { queryData } from '../../Services/ContentfulServices';
import { ContentfulJuniorYouthCoursesPageSettings } from '../../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
import { EntryId } from '../../Types/CommonTypes';
import { JuniorYouthCoursesPageSettings } from '../../Types/CoursesPageSettings/JuniorYouthCoursesPageSettings';

export default async (): Promise<JuniorYouthCoursesPageSettings> => {
  const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forJuniorYouthCoursesPageTitle
      forJuniorYouthCoursesPageRoadmap {
        url
        title
      }
    }
  }`;

  const response = await queryData<ContentfulJuniorYouthCoursesPageSettings>(queryString, {
    coursesPageSettingsId: EntryId.CoursesPageSettings,
  });

  return new JuniorYouthCoursesPageSettings(response);
};
