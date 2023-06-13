var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import { AllCoursesAndSettings } from '../../Types/Courses/AllCoursesAndSettings';
export default () => __awaiter(void 0, void 0, void 0, function* () {
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
    const response = yield queryData(queryString, {
        coursesPageSettingsId: EntryId.CoursesPageSettings,
    });
    return new AllCoursesAndSettings(response);
});
