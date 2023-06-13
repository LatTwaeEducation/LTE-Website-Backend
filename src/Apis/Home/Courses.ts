import { queryData } from '../../Services/ContentfulServices';
import { ContentfulAllCategoriesCoursesNamesResponse } from '../../Types/Courses/ContentfulCourseResponses';
import { EntryId } from '../../Types/CommonTypes';
import { AllCoursesAndSettings } from '../../Types/Courses/AllCoursesAndSettings';
import { ContentfulAllCoursesColourSettings } from '../../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';

export default async (): Promise<AllCoursesAndSettings> => {
  const queryString = `
  query Course_Home($coursesPageSettingsId: String!) {
    juniorCourses: courseCollection(where: { classCategory: "Junior" }) {
      items {
        name
      }
    }

    youthCourses: courseCollection(where: { classCategory: "Youth" }) {
      items {
        name
      }
    }

    everyoneCourses: courseCollection(where: { classCategory: "Everyone" }) {
      items {
        name
      }
    }

    igcseCourses: courseCollection(where: { classCategory: "IGCSE" }) {
      items {
        name
      }
    }
    
    coursePageSettings(id: $coursesPageSettingsId) {
      forIgcseCoursesColour
      forYouthCoursesColour
      forJuniorCoursesColour
      forEveryoneCoursesColour
    }
  }
  `;

  const response = await queryData<ContentfulAllCategoriesCoursesNamesResponse & ContentfulAllCoursesColourSettings>(
    queryString,
    {
      coursesPageSettingsId: EntryId.CoursesPageSettings,
    }
  );
  return new AllCoursesAndSettings(response);
};
