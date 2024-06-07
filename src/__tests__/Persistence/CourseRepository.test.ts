import { getCourseById } from '@persistence/CourseRepository';
import dotenv from 'dotenv';

dotenv.config();

describe('CourseRepository Tests', () => {
  describe('getCourseById Tests', () => {
    test('Should return an object', async () => {
      const response = await getCourseById('4GP1vmJ4Tbnw9UzDQlTD4c');
      expect(response).toBeDefined();
      expect(typeof response).toBe('object');
    });
  });
});
