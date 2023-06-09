import dotenv from 'dotenv';
import { expect } from '@jest/globals';
import { getIgcseCourses } from '../../Apis/Igcse';

dotenv.config();

describe('IGCSE Page API tests', () => {
  test('Should return an array of CourseCard, and has "IGCSE" class category', async () => {
    const data = await getIgcseCourses();

    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();
    const expectedElement = expect.objectContaining({
      id: expect.any(String),
      thumbnail: expect.assetOrNull(),
      name: expect.any(String),
      duration: expect.any(Number),
      students: expect.any(Number),
      classCategory: expect.stringMatching('IGCSE'),
    });

    data.forEach((element) => {
      expect(element).toMatchObject(expectedElement);
    });
  });
});
