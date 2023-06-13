import { queryData } from '../../Services/ContentfulServices';
import {
  ContentfulCourseDetailsResponse,
  ContentfulGraphQLCourseEntryResponse,
} from '../../Types/Courses/ContentfulCourseResponses';
import { CourseDetails } from '../../Types/Courses/CourseDetails';

type CourseIdVariable = {
  courseId: string;
};

const generateQueryVariables = (courseId: string): CourseIdVariable => ({
  courseId,
});

const getCourseDetails = async (courseId: string) => {
  const queryString = `
  query Courses_Junior($courseId: String!) {
    course(id: $courseId) {
      sys {
        id
      }
      featuredImage {
        url
        title
      }
      name
      classCategory
      fromAge
      toAge
      duration
      students
      learningPlatforms
      price
      requirements
      languages
      classDescription
      skillsYouWillGain
      whatWillYouLearn
      courseDescription
      continuousLearning
    }
  }`;

  const { course } = await queryData<ContentfulGraphQLCourseEntryResponse<ContentfulCourseDetailsResponse>>(
    queryString,
    generateQueryVariables(courseId)
  );

  return new CourseDetails(course);
};

export default getCourseDetails;
