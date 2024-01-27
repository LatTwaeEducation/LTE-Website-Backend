import { queryData } from './ContentfulServices';
import { EntryId } from '../Types/CommonTypes';
export default async () => {
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
    const { organisationInformation, courseCollection } = await queryData(queryString, {
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
    ];
};
