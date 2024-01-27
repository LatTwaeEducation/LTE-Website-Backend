import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import { AllCoursesAndSettings } from '../../Types/Courses/AllCoursesAndSettings';
export default async () => {
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
    const response = await queryData(queryString, {
        coursesPageSettingsId: EntryId.CoursesPageSettings,
    });
    return new AllCoursesAndSettings(response);
};
