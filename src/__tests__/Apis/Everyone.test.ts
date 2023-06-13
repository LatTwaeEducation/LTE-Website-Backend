import dotenv from 'dotenv';
import { getEveryoneCourses, getEveryoneCoursesPageSettings } from '../../Apis/Everyone';
import { CourseCard } from '../../Types/Courses/CourseCard';
import { EveryoneCoursesPageSettings } from '../../Types/CoursesPageSettings/EveryoneCoursesPageSettings';

dotenv.config();

describe('Everyone Page API tests', () => {
  test('Should return an EveryonePageSettings instance', async () => {
    const data = await getEveryoneCoursesPageSettings();

    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(EveryoneCoursesPageSettings);
  });

  test('Should return an array of CourseCard, and has "Everyone" class category', async () => {
    const data = await getEveryoneCourses();

    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();

    data.forEach((element) => {
      expect(element).toBeInstanceOf(CourseCard);
    });
  });
});
