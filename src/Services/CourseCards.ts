import { convertToCourseCard } from '../Mappers/ContentfulCourseAndCourse';
import { queryData } from './ContentfulServices';
import type { ClassCategory } from '../Types/CommonTypes';
import type {
  ContentfulCourseCardResponse,
  ContentfulGraphQLCourseCollectionResponse,
} from '../Types/Courses/ContentfulCourseResponse';

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
  query Courses_Junior($filter: CourseFilter) {
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
        students
        classCategory
      }
    }
  }  
  `;

  const { courseCollection } = await queryData<ContentfulGraphQLCourseCollectionResponse<ContentfulCourseCardResponse>>(
    queryString,
    generateQueryVariables(course)
  );

  return courseCollection.items.map(convertToCourseCard);
};

export default getCourseCards;
