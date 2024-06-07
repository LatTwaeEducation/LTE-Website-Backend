import { getEveryoneCourses, getEveryoneCoursesPageSettings } from '@apis/Everyone';
import dotenv from 'dotenv';

dotenv.config();

describe('Everyone Page API tests', () => {
  test('Should return an EveryonePageSettings instance', async () => {
    const data = await getEveryoneCoursesPageSettings();
    expect(data).toBeDefined();
  });

  test('Should return an array of CourseCard, and has "Everyone" class category', async () => {
    const data = await getEveryoneCourses();
    expect(data).toBeDefined();
    expect(Array.isArray(data.courses)).toBeTruthy();
  });
});
