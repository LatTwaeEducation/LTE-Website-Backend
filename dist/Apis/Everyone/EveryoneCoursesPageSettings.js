import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import { EveryoneCoursesPageSettings } from '../../Types/CoursesPageSettings/EveryoneCoursesPageSettings';
export default async () => {
    const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forEveryoneCoursesPageTitle
      forEveryoneCoursesPageBody
    }
  }`;
    const { coursePageSettings } = await queryData(queryString, {
        coursesPageSettingsId: EntryId.CoursesPageSettings,
    });
    return new EveryoneCoursesPageSettings(coursePageSettings);
};
