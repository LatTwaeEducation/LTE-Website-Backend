import { queryData } from './ContentfulServices';
import { EntryId } from '../Types/CommonTypes';
import { AllCoursesColourSettings } from '../Types/CoursesPageSettings/AllCoursesColourSettings';
export default async () => {
    const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forIgcseCoursesColour
      forYouthCoursesColour
      forJuniorCoursesColour
      forEveryoneCoursesColour
    }
  }`;
    const response = await queryData(queryString, {
        coursePageSettingsId: EntryId.CoursesPageSettings,
    });
    return new AllCoursesColourSettings(response);
};
