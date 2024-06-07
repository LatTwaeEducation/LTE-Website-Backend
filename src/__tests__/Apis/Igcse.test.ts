import { getIgcseCourses, getIgcseCoursesPageSettings } from '@apis/Igcse';
import { expect } from '@jest/globals';
import dotenv from 'dotenv';

dotenv.config();

describe('IGCSE Page API tests', () => {
  test('Should return CoursePageSetting object', async () => {
    const data = await getIgcseCoursesPageSettings();
    expect(data).toBeDefined();
    expect(typeof data).toBe('object');
    expect(data);
  });

  test('Should return an array of CourseCard, and has "IGCSE" class category', async () => {
    const data = await getIgcseCourses();
    expect(data).toBeDefined();
    expect(typeof data).toBe('object');
    expect(Array.isArray(data.courses)).toBeTruthy();
    data.courses.forEach((c) => {
      expect(c.classCategory).toBe('IGCSE');
    });
  });
});
