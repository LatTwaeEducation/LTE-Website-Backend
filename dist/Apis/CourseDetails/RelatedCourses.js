import { queryData } from '../../Services/ContentfulServices';
import { convertToCourseCards } from '../../Mappers/ContentfulCourseAndCourse';
export default async (classCategory) => {
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
    const queryVariables = {
        limit: 3,
        filter: {
            classCategory,
        },
    };
    const response = await queryData(queryString, queryVariables);
    return convertToCourseCards(response);
};
