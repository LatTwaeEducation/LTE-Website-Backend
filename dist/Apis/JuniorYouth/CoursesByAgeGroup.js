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
const getCourseCardsByAgeGroup = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
    query($filter: CourseFilter, $coursePageSettingsId: String!) {
    coursePageSettings(id: $coursePageSettingsId) {
      forJuniorCoursesColour
      forYouthCoursesColour
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
    const response = yield queryData(queryString, {
        filter: {
            classCategory_in: ['Junior', 'Youth'],
        },
        coursePageSettingsId: EntryId.CoursesPageSettings,
    });
    const result = [];
    response.courseCollection.items.forEach((c) => {
        const groupIndex = result.findIndex((r) => r.courseAgeGroup[0] === c.fromAge && r.courseAgeGroup[1] === c.toAge);
        if (groupIndex !== -1) {
            result[groupIndex].courses.push(new CourseCard(c));
        }
        else {
            const newGroup = {
                courseAgeGroup: [c.fromAge, c.toAge],
                courseCardColor: c.classCategory === 'Junior'
                    ? response.coursePageSettings.forJuniorCoursesColour
                    : response.coursePageSettings.forYouthCoursesColour,
                courses: [new CourseCard(c)],
            };
            result.push(newGroup);
        }
    });
    return result;
});
export default getCourseCardsByAgeGroup;