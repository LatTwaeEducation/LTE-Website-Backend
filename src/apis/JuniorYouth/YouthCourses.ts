import queryData from 'src/services/graphql';
import type { Sys, ClassCategory, CourseCard } from 'src/types';

export default async () => {
  type Response = {
    courseCollection: {
      items: {
        sys: Sys;
        name: string;
        duration: number;
        students: number;
        classCategory: ClassCategory;
      }[];
    };
  };

  const queryString = `
  query Courses_Junior {
    courseCollection(where: { classCategory: "Youth" }) {
      items {
        sys {
          id
        }
        name
        duration
        students
        classCategory
      }
    }
  }
  `;

  const { courseCollection } = await queryData<Response>(queryString);

  return courseCollection.items.map(({ sys, name, duration, students, classCategory }) => {
    return {
      id: sys.id,
      name,
      duration,
      students,
      classCategory,
    } as CourseCard;
  });
};
