import queryData from './graphql';

export default async () => {
  type Data = {
    miscellaneous: {
      value: number;
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
      miscellaneous (id:"6wDI0CAaFAXWiESwED8F4A"){
        value
      }, 
      courseCollection {
        total
        items {
          students
        }
      }
    }
    `;

  const { miscellaneous, courseCollection } = await queryData<Data>(queryString);

  return {
    membersCount: miscellaneous.value,
    coursesCount: courseCollection.total,
    studentsCount: courseCollection.items.reduce((totalStudents, item) => totalStudents + item.students, 0),
  };
};
