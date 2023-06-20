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
import { convertToCourseCards } from '../../Mappers/ContentfulCourseAndCourse';
export default (classCategory) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query($limit: Int, $filter: CourseFilter) {
    courseCollection(limit: $limit, where: $filter) {
      items {
        sys {
          id
        }
        thumbnail {
          url
          title
        }
        name
        classCategory
        fromAge
        toAge
        duration
        hoursPerWeek
        students
      }
    }
  }`;
    const queryVariables = {
        limit: 3,
        filter: {
            classCategory,
        },
    };
    const response = yield queryData(queryString, queryVariables);
    return convertToCourseCards(response);
});
