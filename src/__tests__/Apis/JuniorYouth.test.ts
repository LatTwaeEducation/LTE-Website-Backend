import dotenv from 'dotenv';
import { expect } from '@jest/globals';
import { getJuniorCourses, getJuniorYouthCoursesPageSettings, getYouthCourses } from '../../Apis/JuniorYouth';
import { CourseCard } from '../../Types/Courses/CourseCard';
import { JuniorYouthCoursesPageSettings } from '../../Types/CoursesPageSettings/JuniorYouthCoursesPageSettings';
import { CourseCardGroup } from '../../Types/Courses/CourseCardGroup';

dotenv.config();

describe('Junior and Youth Page API tests', () => {
  describe('Junior and Youth Page Settings Tests', () => {
    test('Should return an JuniorYouthPageSettings', async () => {
      const data = await getJuniorYouthCoursesPageSettings();
      expect(data).toBeDefined();
      expect(data).toBeInstanceOf(JuniorYouthCoursesPageSettings);
    });
  });

  describe('Junior Courses Tests', () => {
    let data: Awaited<Promise<CourseCardGroup>>;
    beforeAll(async () => {
      data = await getJuniorCourses();
    });

    test('Should return an array of CourseCard instance, and has "Junior" class category', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data.courses)).toBeTruthy();

      data.courses.forEach(element => {
        expect(element).toBeInstanceOf(CourseCard);
        expect(element.classCategory).toBe('Junior');
      });
    });
  });

  describe('Youth Courses Tests', () => {
    let data: Awaited<Promise<CourseCardGroup>>;
    beforeAll(async () => {
      data = await getYouthCourses();
    });

    test('Should return an array of CourseCard instance, and has "Youth" class category', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data.courses)).toBeTruthy();

      data.courses.forEach(element => {
        expect(element).toBeInstanceOf(CourseCard);
      });
    });
  });
});
