var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import queryData from '../../services/graphql';
export default () => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query Course_Home {
    JuniorCourses: courseCollection(where: { classCategory: "Junior" }) {
      items {
        name
      }
    }

    YouthCourses: courseCollection(where: { classCategory: "Youth" }) {
      items {
        name
      }
    }

    EveryoneCourses: courseCollection(where: { classCategory: "Everyone" }) {
      items {
        name
      }
    }

    IgcseCourses: courseCollection(where: { classCategory: "IGCSE" }) {
      items {
        name
      }
    }
  }
  `;
    const { JuniorCourses, YouthCourses, EveryoneCourses, IgcseCourses } = yield queryData(queryString);
    return {
        juniorCourses: JuniorCourses.items.map((item) => item.name),
        youthCourses: YouthCourses.items.map((item) => item.name),
        everyoneCourses: EveryoneCourses.items.map((item) => item.name),
        igcseCourses: IgcseCourses.items.map((item) => item.name),
    };
});
