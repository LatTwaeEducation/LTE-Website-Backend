import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import { JuniorYouthCoursesPageSettings } from '../../Types/CoursesPageSettings/JuniorYouthCoursesPageSettings';
export default async () => {
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
    const { coursePageSettings } = await queryData(queryString, {
        coursesPageSettingsId: EntryId.CoursesPageSettings,
    });
    return new JuniorYouthCoursesPageSettings(coursePageSettings);
};
