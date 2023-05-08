import queryData from '../../services/graphql';
import type { Sys, ClassCategory, CourseCard, Asset } from '../../types';

export default async () => {
  type Response = {
    courseCollection: {
      items: {
        sys: Sys;
        name: string;
        duration: number;
        students: number;
        classCategory: ClassCategory;
        thumbnail: Asset;
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

  const { courseCollection } = await queryData<Response>(queryString);

  return courseCollection.items.map(({ sys, name, duration, students, classCategory, thumbnail }) => {
    return {
      id: sys.id,
      name,
      duration,
      students,
      classCategory,
      thumbnail,
    } as CourseCard;
  });
};
