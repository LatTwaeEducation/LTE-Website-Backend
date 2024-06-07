import { getPreviousEvents, getUpcomingEvents } from '@apis/ActivitiesAndEvents';
import { expect } from '@jest/globals';
import dotenv from 'dotenv';

dotenv.config();

describe('Activities and Events Page Test', () => {
  describe('Getting Previous Activities Test', () => {
    let data: Awaited<ReturnType<typeof getPreviousEvents>>;
    beforeAll(async () => {
      data = await getPreviousEvents();
    });

    test('Should return an array', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((item) => {
        expect(item).toBeDefined();
        expect(typeof item).toBe('object');
      });
    });
  });

  describe('Getting Upcoming Activities Test', () => {
    let data: Awaited<ReturnType<typeof getUpcomingEvents>>;
    beforeAll(async () => {
      data = await getUpcomingEvents();
    });

    test('Should return an array', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((item) => {
        expect(item).toBeDefined();
        expect(typeof item).toBe('object');
      });
    });
  });
});
