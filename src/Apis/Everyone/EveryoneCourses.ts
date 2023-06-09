import { queryData } from '../../Services/ContentfulServices';
import type { Asset, ClassCategory, CourseCard } from '../../Types/CommonTypes';
import type { BaseSys } from '../../Types/Contentful/CommonTypes';

export default async () => {
  type Response = {
    courseCollection: {
      items: {
        sys: BaseSys;
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
    courseCollection(where: { classCategory: "Everyone" }) {
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
