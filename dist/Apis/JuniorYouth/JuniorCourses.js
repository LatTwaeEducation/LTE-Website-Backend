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
import { CourseCard } from '../../Types/Courses/CourseCard';
import { getCourseGroupTitle } from '../../Services/GetCourseGroupTitle';
const getJuniorCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query($filter: CourseFilter, $coursePageSettingsId: String!) {
    coursePageSettings(id: $coursePageSettingsId) {
      forJuniorCoursesColour
    }
    courseCollection(where: $filter) {
      items {
        sys {
          id
        }
        thumbnail {
          url
          title
        }
        name
        duration
        hoursPerWeek
        fromAge
        toAge
        students
        classCategory
      }
    }
  }`;
    const { coursePageSettings, courseCollection } = yield queryData(queryString, {
        filter: {
            classCategory: 'Junior',
        },
        coursePageSettingsId: EntryId.CoursesPageSettings,
    });
    return {
        courseCardColor: coursePageSettings.forJuniorCoursesColour,
        courseGroupTitle: getCourseGroupTitle(courseCollection),
        courses: courseCollection.items.map((c) => new CourseCard(c)),
    };
});
export default getJuniorCourses;
