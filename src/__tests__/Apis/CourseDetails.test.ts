import { getCourseDetails, getRelatedCourses } from '@apis/CourseDetails';
import dotenv from 'dotenv';

dotenv.config();

const COURSE_ID = '4GP1vmJ4Tbnw9UzDQlTD4c';

describe('Course Details Page API Tests', () => {
  describe('Getting Course Details Tests', () => {
    test('Should return a CourseDetails instance', async () => {
      const data = await getCourseDetails(COURSE_ID);
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });
  });

  describe('Getting Related Courses Tests', () => {
    let data: Awaited<Promise<ReturnType<typeof getRelatedCourses>>>;
    let classCategory: string;
    beforeAll(async () => {
      classCategory = (await getCourseDetails(COURSE_ID)).classCategory;
      data = await getRelatedCourses(classCategory);
    });

    test('Should return an array of CourseCard instances with specified classCategory', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((course) => {
        expect(course.classCategory).toBe(classCategory);
      });
    });

    test('Should return at most 3 courses', () => {
      expect(data.length).toBeLessThanOrEqual(3);
    });
  });
});
