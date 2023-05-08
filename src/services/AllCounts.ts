import queryData from './graphql';
import type { CountCard } from '../types';

export default async () => {
  type Data = {
    organisationInformation: {
      membersCount: number;
      coursesCountMessage: string;
      membersCountMessage: string;
      studentsCountMessage: string;
    };
    courseCollection: {
      total: number;
      items: {
        students: number;
      }[];
    };
  };

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

  const { organisationInformation, courseCollection } = await queryData<Data>(queryString);

  return {
    members: {
      count: organisationInformation.membersCount,
      message: organisationInformation.membersCountMessage,
    } as CountCard,
    courses: {
      count: courseCollection.total,
      message: organisationInformation.coursesCountMessage,
    } as CountCard,
    students: {
      count: courseCollection.items.reduce((acc, item) => acc + item.students, 0),
      message: organisationInformation.studentsCountMessage,
    } as CountCard,
  };
};
