var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { queryData } from './ContentfulServices';
import { convertToCourseCards } from '../Mappers/ContentfulCourseAndCourse';
const generateQueryVariables = (course) => ({
    filter: {
        classCategory: course,
    },
});
const getCourseCards = (course) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query ($filter: CourseFilter) {
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
  }  
  `;
    const response = yield queryData(queryString, generateQueryVariables(course));
    return convertToCourseCards(response);
});
export default getCourseCards;
