var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import queryData from './graphql';
export default () => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
    query AllCounts{
      organisationInformation (id:"2ImII347rPAsMUUHNSwI5I"){
        membersCount
        coursesCountMessage
        membersCountMessage
        studentsCountMessage
      }, 
      courseCollection {
        total
        items {
          students
        }
      }
    }
    `;
    const { organisationInformation, courseCollection } = yield queryData(queryString);
    return {
        members: {
            count: organisationInformation.membersCount,
            message: organisationInformation.membersCountMessage,
        },
        courses: {
            count: courseCollection.total,
            message: organisationInformation.coursesCountMessage,
        },
        students: {
            count: courseCollection.items.reduce((acc, item) => acc + item.students, 0),
            message: organisationInformation.studentsCountMessage,
        },
    };
});
