import { ClassCategory } from '../../Types/CommonTypes';
import { queryData } from '../../Services/ContentfulServices';
import {
  ContentfulCourseCardResponse,
  ContentfulCoursesPageResponse,
} from '../../Types/Courses/ContentfulCourseResponses';
import { convertToCourseCards } from '../../Mappers/ContentfulCourseAndCourse';

type CourseFilter = {
  classCategory: ClassCategory;
};

type QueryVariables = {
  limit?: number;
  filter?: CourseFilter;
};

export default async (classCategory: ClassCategory) => {
  const queryString = `
  query($limit: Int, $filter: CourseFilter) {
    courseCollection(limit: $limit, where: $filter) {
      items {
        sys {
          id
        }
        thumbnail {
          url
          title
        }
        name
        classCategory
        fromAge
        toAge
        duration
        hoursPerWeek
        students
      }
    }
  }`;

  const queryVariables: QueryVariables = {
    limit: 3,
    filter: {
      classCategory,
    },
  };

  const response = await queryData<ContentfulCoursesPageResponse<ContentfulCourseCardResponse>>(
    queryString,
    queryVariables
  );

  return convertToCourseCards(response);
};
