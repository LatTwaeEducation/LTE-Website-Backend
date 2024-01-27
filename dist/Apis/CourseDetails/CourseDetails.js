import { queryData } from '../../Services/ContentfulServices';
import { CourseDetails } from '../../Types/Courses/CourseDetails';
const generateQueryVariables = (courseId) => ({
    courseId,
});
const getCourseDetails = async (courseId) => {
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
    const { course } = await queryData(queryString, generateQueryVariables(courseId));
    return new CourseDetails(course);
};
export default getCourseDetails;
