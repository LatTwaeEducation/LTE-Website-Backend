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
    const { courseCollection, coursePageSettings } = yield queryData(queryString, {
        filter: {
            classCategory_in: ['Junior', 'Youth'],
        },
        coursePageSettingsId: EntryId.CoursesPageSettings,
    });
    const uniqueAgeGroups = courseCollection.items
        .map((c) => [c.fromAge, c.toAge])
        .filter(([from, to], i, arr) => arr.findIndex(([f, t]) => from === f && to === t) === i);
    return uniqueAgeGroups.map(([from, to]) => {
        var _a;
        const courses = courseCollection.items
            .filter((c) => c.fromAge === from && c.toAge === to)
            .map((c) => new CourseCard(c));
        const category = (_a = courses.at(0)) === null || _a === void 0 ? void 0 : _a.classCategory;
        return {
            courseGroupTitle: `Courses For (Age ${from} - ${to})`,
            courseCardColor: category === 'Junior' ? coursePageSettings.forJuniorCoursesColour : coursePageSettings.forYouthCoursesColour,
            courses,
        };
    });
});
export default getCourseCardsByAgeGroup;
