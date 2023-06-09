import dotenv from 'dotenv';
import { expect } from '@jest/globals';
import { getJuniorCourses, getYouthCourses } from '../../Apis/JuniorYouth';
import { CourseCard } from '../../Types/CommonTypes';

dotenv.config();

describe('Junior and Youth Page API tests', () => {
  describe('Junior Courses tests', () => {
    let data: Awaited<Promise<CourseCard[]>>;
    beforeAll(async () => {
      data = await getJuniorCourses();
    });

    test('Should return an array of CourseCard, and has "Junior" class category', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();
      const expectedElement = expect.objectContaining({
        id: expect.any(String),
        thumbnail: expect.assetOrNull(),
        name: expect.any(String),
        duration: expect.any(Number),
        students: expect.any(Number),
        classCategory: expect.stringMatching('Junior'),
      });

      data.forEach((element) => {
        expect(element).toMatchObject(expectedElement);
      });
    });
  });

  describe('Youth Courses tests', () => {
    let data: Awaited<Promise<CourseCard[]>>;
    beforeAll(async () => {
      data = await getYouthCourses();
    });

    test('Should return an array of CourseCard, and has "Youth" class category', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();
      const expectedElement = expect.objectContaining({
        id: expect.any(String),
        thumbnail: expect.assetOrNull(),
        name: expect.any(String),
        duration: expect.any(Number),
        students: expect.any(Number),
        classCategory: expect.stringMatching('Youth'),
      });

      data.forEach((element) => {
        expect(element).toMatchObject(expectedElement);
      });
    });
  });
});
