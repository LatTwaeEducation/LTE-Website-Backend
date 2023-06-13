var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { queryData } from '../../Services/ContentfulServices';
import { CourseDetails } from '../../Types/Courses/CourseDetails';
const generateQueryVariables = (courseId) => ({
    courseId,
});
const getCourseDetails = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
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
    const { course } = yield queryData(queryString, generateQueryVariables(courseId));
    return new CourseDetails(course);
});
export default getCourseDetails;
