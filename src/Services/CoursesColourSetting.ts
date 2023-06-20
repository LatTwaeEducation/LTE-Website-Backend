import { queryData } from './ContentfulServices';
import { ContentfulAllCoursesColourSettings } from '../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
import { EntryId } from '../Types/CommonTypes';
import { AllCoursesColourSettings } from '../Types/CoursesPageSettings/AllCoursesColourSettings';

export default async (): Promise<AllCoursesColourSettings> => {
  const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forIgcseCoursesColour
      forYouthCoursesColour
      forJuniorCoursesColour
      forEveryoneCoursesColour
    }
  }`;

  const response = await queryData<ContentfulAllCoursesColourSettings>(queryString, {
    coursePageSettingsId: EntryId.CoursesPageSettings,
  });

  return new AllCoursesColourSettings(response);
};
