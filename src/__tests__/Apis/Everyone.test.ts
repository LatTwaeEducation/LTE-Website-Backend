import dotenv from 'dotenv';
import { getEveryoneCourses } from '../../Apis/Everyone';
import { CourseCard } from '../../Types/Courses/CourseCard';

dotenv.config();

describe('IGCSE Page API tests', () => {
  test('Should return an array of CourseCard, and has "IGCSE" class category', async () => {
    const data = await getEveryoneCourses();

    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();

    data.forEach((element) => {
      expect(element).toBeInstanceOf(CourseCard);
    });
  });
});
