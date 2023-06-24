import dotenv from 'dotenv';
import { expect } from '@jest/globals';
import { getPreviousEvents, getUpcomingEvents } from '../../Apis/ActivitiesAndEvents';
import { PreviousActivityEventCard } from '../../Types/ActivitiesEvents/PreviousActivityEventCard';
import { UpcomingActivityEventCard } from '../../Types/ActivitiesEvents/UpcomingActivityEventCard';
import { getEventDetails, getNextEvents } from '../../Apis/EventsDetails';
import { PreviousActivityEventDetails } from '../../Types/ActivitiesEvents/PreviousActivityEventDetails';
import { UpcomingActivityEventDetails } from '../../Types/ActivitiesEvents/UpcomingActivityEventDetails';

dotenv.config();

describe('Event Details Page Test', () => {
  describe('Getting Event Details ', () => {
    let previousEvent: Awaited<ReturnType<typeof getEventDetails>>;
    let upcomingEvent: Awaited<ReturnType<typeof getEventDetails>>;

    beforeAll(async () => {
      const previousEventId = (await getPreviousEvents())[0].id;
      const upcomingEventId = (await getUpcomingEvents())[0].id;
      previousEvent = await getEventDetails(previousEventId);
      upcomingEvent = await getEventDetails(upcomingEventId);
    });

    test('Should return PreviousActivityEventDetails instance for previousEventId', () => {
      expect(previousEvent).toBeDefined();
      expect(previousEvent).toBeInstanceOf(PreviousActivityEventDetails);
    });

    test('Should return UpcomingActivityEventDetails instance for upcomingEventId', () => {
      expect(upcomingEvent).toBeDefined();
      expect(upcomingEvent).toBeInstanceOf(UpcomingActivityEventDetails);
    });
  });

  describe('Getting Next Events', () => {
    let data: Awaited<ReturnType<typeof getNextEvents>>;
    beforeAll(async () => {
      data = await getNextEvents();
    });

    test('Should return an array containing either PreviousActivityEventCard or UpcomingActivityEventCard instances', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((item) => {
        expect(item instanceof PreviousActivityEventCard || item instanceof UpcomingActivityEventCard).toBeTruthy();
      });
    });
    test('Array should have length less than or equal to 2', () => {
      expect(data.length <= 2).toBeTruthy();
    });
  });
});
