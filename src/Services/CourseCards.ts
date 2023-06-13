import { queryData } from './ContentfulServices';
import type { ClassCategory } from '../Types/CommonTypes';
import type {
  ContentfulCourseCardResponse,
  ContentfulCoursesPageResponse,
} from '../Types/Courses/ContentfulCourseResponses';
import { convertToCourseCards } from '../Mappers/ContentfulCourseAndCourse';

type CourseFilter = {
  classCategory: ClassCategory;
};

type QueryVariables = {
  filter: CourseFilter;
};

const generateQueryVariables = (course: ClassCategory): QueryVariables => ({
  filter: {
    classCategory: course,
  },
});

const getCourseCards = async (course: ClassCategory) => {
  const queryString = `
  query ($filter: CourseFilter) {
    courseCollection(where: $filter) {
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
        hoursPerWeek
        fromAge
        toAge
        students
        classCategory
      }
    }
  }  
  `;

  const response = await queryData<ContentfulCoursesPageResponse<ContentfulCourseCardResponse>>(
    queryString,
    generateQueryVariables(course)
  );

  return convertToCourseCards(response);
};

export default getCourseCards;
