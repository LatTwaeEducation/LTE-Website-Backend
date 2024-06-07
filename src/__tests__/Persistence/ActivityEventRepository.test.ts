import { getActivitiesEvents, getActivityEventById } from '@persistence/ActivityEventRepository';
import dotenv from 'dotenv';

dotenv.config();

describe('ActivityEventRepository Tests', () => {
  describe('getActivityEventById Tests', () => {
    test('Should return activityEvent', async () => {
      const response = await getActivityEventById('3IAIiwAOlipA8lu4Gon59L');
      expect(response).toBeDefined();
      expect(typeof response).toBe('object');
    });
  });

  describe('getActivityEvents Tests', () => {
    test('Should return object for specified id', async () => {
      const response = await getActivitiesEvents();
      expect(response).toBeDefined();
      expect(typeof response).toBe('object');
    });
  });
});
