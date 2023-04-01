import queryData from 'src/services/graphql';
import type { BaseCourse } from 'src/types';

export default async () => {
  type Response = {
    JuniorCourses: {
      items: BaseCourse[];
    };
    YouthCourses: {
      items: BaseCourse[];
    };
    EveryoneCourses: {
      items: BaseCourse[];
    };
    IgcseCourses: {
      items: BaseCourse[];
    };
  };

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

  const { JuniorCourses, YouthCourses, EveryoneCourses, IgcseCourses } = await queryData<Response>(queryString);

  return {
    juniorCourses: JuniorCourses.items.map((item) => item.name),
    youthCourses: YouthCourses.items.map((item) => item.name),
    everyoneCourses: EveryoneCourses.items.map((item) => item.name),
    igcseCourses: IgcseCourses.items.map((item) => item.name),
  };
};
