import { queryData } from '../../Services/ContentfulServices';
import { ContentfulIgcseCoursesPageSetting } from '../../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
import { EntryId } from '../../Types/CommonTypes';
import { IgcseCoursesPageSettings } from '../../Types/CoursesPageSettings/IgcseCoursesPageSettings';

export default async (): Promise<IgcseCoursesPageSettings> => {
  const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forIgcseCoursesColour
      forIgcseCoursesPageTitle
      forIgcseCoursesPageBody
    }
  }`;

  const response = await queryData<ContentfulIgcseCoursesPageSetting>(queryString, {
    coursesPageSettingsId: EntryId.CoursesPageSettings,
  });

  return new IgcseCoursesPageSettings(response);
};
