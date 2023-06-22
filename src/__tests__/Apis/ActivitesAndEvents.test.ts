import dotenv from 'dotenv';
import { expect } from '@jest/globals';
import { getPreviousEvents, getUpcomingEvents } from '../../Apis/ActivitiesAndEvents';
import { PreviousActivityEventCard } from '../../Types/ActivitiesEvents/PreviousActivityEventCard';
import { UpcomingActivityEventCard } from '../../Types/ActivitiesEvents/UpcomingActivityEventCard';

dotenv.config();

describe('Activities and Events Page Test', () => {
  describe('Getting Previous Activities Test', () => {
    let data: Awaited<ReturnType<typeof getPreviousEvents>>;
    beforeAll(async () => {
      data = await getPreviousEvents();
    });

    test('Should return an array containing PreviousActivityEventCard instances', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((item) => {
        expect(item).toBeInstanceOf(PreviousActivityEventCard);
      });
    });
    test('All PreviousActivityEventCard instances should have date less than or equal to current date', () => {
      const currentDate = new Date();
      data.forEach((item) => {
        expect(new Date(item.date) <= currentDate).toBeTruthy();
      });
    });
  });

  describe('Getting Upcoming Activities Test', () => {
    let data: Awaited<ReturnType<typeof getUpcomingEvents>>;
    beforeAll(async () => {
      data = await getUpcomingEvents();
    });

    test('Should return an array containing PreviousActivityEventCard instances', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((item) => {
        expect(item).toBeInstanceOf(UpcomingActivityEventCard);
      });
    });
    test('All PreviousActivityEventCard instances should have date greater than current date', () => {
      const currentDate = new Date();
      data.forEach((item) => {
        expect(new Date(item.date) > currentDate).toBeTruthy();
      });
    });
  });
});
