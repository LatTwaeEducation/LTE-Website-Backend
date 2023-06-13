import dotenv from 'dotenv';
import { expect } from '@jest/globals';
import { getIgcseCourses, getIgcseCoursesPageSettings } from '../../Apis/Igcse';
import { CourseCard } from '../../Types/Courses/CourseCard';
import { IgcseCoursesPageSettings } from '../../Types/CoursesPageSettings/IgcseCoursesPageSettings';

dotenv.config();

describe('IGCSE Page API tests', () => {
  test('Should return an IgcseCoursesPageSettings instance', async () => {
    const data = await getIgcseCoursesPageSettings();
    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(IgcseCoursesPageSettings);
  });

  test('Should return an array of CourseCard, and has "IGCSE" class category', async () => {
    const data = await getIgcseCourses();

    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();

    data.forEach((element) => {
      expect(element).toBeInstanceOf(CourseCard);
    });
  });
});
