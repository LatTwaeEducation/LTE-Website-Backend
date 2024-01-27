import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import { IgcseCoursesPageSettings } from '../../Types/CoursesPageSettings/IgcseCoursesPageSettings';
export default async () => {
    const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forIgcseCoursesPageTitle
      forIgcseCoursesPageBody
    }
  }`;
    const { coursePageSettings } = await queryData(queryString, {
        coursesPageSettingsId: EntryId.CoursesPageSettings,
    });
    return new IgcseCoursesPageSettings(coursePageSettings);
};
