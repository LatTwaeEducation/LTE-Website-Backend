import { PageSettingName } from '@data/Constraints';
import { getCoursePageSettingById, getCoursePageSettingId } from '@persistence/CoursePageSettingRepository';
import dotenv from 'dotenv';

dotenv.config();

describe('CoursePageSettingRepository Tests', () => {
  describe('getCoursePageSettingId Tests', () => {
    test('Should return Id string for specified category', async () => {
      const response = await getCoursePageSettingId(PageSettingName.Igcse);
      expect(response).toBeDefined();
      expect(typeof response).toBe('string');
      expect(response?.length).toBeGreaterThan(0);
    });
  });

  describe('getCoursePageSettingById Tests', () => {
    test('Should return object for specified id', async () => {
      const response = await getCoursePageSettingById('1iCAH9g6f4Vg4hSgw6J27v');
      expect(response).toBeDefined();
      expect(typeof response).toBe('object');
    });
  });
});
