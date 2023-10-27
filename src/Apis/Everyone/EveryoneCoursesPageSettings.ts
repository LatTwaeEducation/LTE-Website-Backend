import { queryData } from '../../Services/ContentfulServices';
import { ContentfulEveryoneCoursesPageSetting } from '../../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
import { EntryId } from '../../Types/CommonTypes';
import { EveryoneCoursesPageSettings } from '../../Types/CoursesPageSettings/EveryoneCoursesPageSettings';

export default async (): Promise<EveryoneCoursesPageSettings> => {
  const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forEveryoneCoursesPageTitle
    }
  }`;

  const response = await queryData<ContentfulEveryoneCoursesPageSetting>(queryString, {
    coursesPageSettingsId: EntryId.CoursesPageSettings,
  });

  return new EveryoneCoursesPageSettings(response);
};
