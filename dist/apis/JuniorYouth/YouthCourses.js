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
export default () => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query Courses_Junior {
    courseCollection(where: { classCategory: "Youth" }) {
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
    const { courseCollection } = yield queryData(queryString);
    return courseCollection.items.map(({ sys, name, duration, students, classCategory, thumbnail }) => {
        return {
            id: sys.id,
            name,
            duration,
            students,
            classCategory,
            thumbnail,
        };
    });
});
