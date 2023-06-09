import { queryData } from '../../Services/ContentfulServices';

export default async (): Promise<{
  juniorCourses: string[];
  youthCourses: string[];
  everyoneCourses: string[];
  igcseCourses: string[];
}> => {
  type Response = {
    JuniorCourses: {
      items: {
        name: string;
      }[];
    };
    YouthCourses: {
      items: {
        name: string;
      }[];
    };
    EveryoneCourses: {
      items: {
        name: string;
      }[];
    };
    IgcseCourses: {
      items: {
        name: string;
      }[];
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
