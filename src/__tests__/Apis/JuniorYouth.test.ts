import { getJuniorCourses, getJuniorYouthCoursesPageSettings, getYouthCourses } from '@apis/JuniorYouth';
import { expect } from '@jest/globals';
import dotenv from 'dotenv';

dotenv.config();

describe('Junior and Youth Page API tests', () => {
  describe('Junior and Youth Page Settings Tests', () => {
    test('Should return an JuniorYouthPageSettings', async () => {
      const data = await getJuniorYouthCoursesPageSettings();
      expect(data).toBeDefined();
    });
  });

  describe('Junior Courses Tests', () => {
    test('Should return an array of CourseCardGroup, and has "Junior" class category', async () => {
      const data = await getJuniorCourses();
      expect(data).toBeDefined();
      expect(Array.isArray(data.courses)).toBeTruthy();
      data.courses.forEach((element) => {
        expect(element.classCategory).toBe('Junior');
      });
    });
  });

  describe('Youth Courses Tests', () => {
    test('Should return an array of CourseCardGroup, and has "Youth" class category', async () => {
      const data = await getYouthCourses();
      expect(data).toBeDefined();
      expect(Array.isArray(data.courses)).toBeTruthy();
      data.courses.forEach((element) => {
        expect(element.classCategory).toBe('Youth');
      });
    });
  });
});
