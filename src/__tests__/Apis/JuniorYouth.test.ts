import dotenv from 'dotenv';
import { expect } from '@jest/globals';
import { getJuniorCourses, getYouthCourses } from '../../Apis/JuniorYouth';
import { CourseCard } from '../../Types/Courses/CourseCard';

dotenv.config();

describe('Junior and Youth Page API tests', () => {
  describe('Junior Courses tests', () => {
    let data: Awaited<Promise<CourseCard[]>>;
    beforeAll(async () => {
      data = await getJuniorCourses();
    });

    test('Should return an array of CourseCard instance, and has "Junior" class category', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((element) => {
        expect(element).toBeInstanceOf(CourseCard);
        expect(element.classCategory).toBe('Junior');
      });
    });
  });

  describe('Youth Courses tests', () => {
    let data: Awaited<Promise<CourseCard[]>>;
    beforeAll(async () => {
      data = await getYouthCourses();
    });

    test('Should return an array of CourseCard instance, and has "Youth" class category', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((element) => {
        expect(element).toBeInstanceOf(CourseCard);
      });
    });
  });
});
