var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { convertToCourseCard } from '../Mappers/ContentfulCourseAndCourse';
import { queryData } from './ContentfulServices';
const generateQueryVariables = (course) => ({
    filter: {
        classCategory: course,
    },
});
const getCourseCards = (course) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query Courses_Junior($filter: CourseFilter) {
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
        students
        classCategory
      }
    }
  }  
  `;
    const { courseCollection } = yield queryData(queryString, generateQueryVariables(course));
    return courseCollection.items.map(convertToCourseCard);
});
export default getCourseCards;
