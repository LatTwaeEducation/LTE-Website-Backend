import queryData from './graphql';
import type { CountCard } from '../types';
import { EntryId } from '../types';

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
    query AllCounts($id: String!) {
      organisationInformation(id: $id) {
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

  const { organisationInformation, courseCollection } = await queryData<Data>(queryString, {
    id: EntryId.OrganisationInformation,
  });
  return [
    {
      name: 'Classes',
      count: courseCollection.total,
      message: organisationInformation.coursesCountMessage,
    },
    {
      name: 'Members',
      count: organisationInformation.membersCount,
      message: organisationInformation.membersCountMessage,
    },
    {
      name: 'Students',
      count: courseCollection.items.reduce((acc, item) => acc + item.students, 0),
      message: organisationInformation.studentsCountMessage,
    },
  ] as CountCard[];
};
