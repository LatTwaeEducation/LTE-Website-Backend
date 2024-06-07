/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getAboutUs, getInfographicTimelines } from '@apis/AboutUs';
import type { AboutUs, InfographicTimeline } from '@domain/AboutUs';
import dotenv from 'dotenv';

import { dateStringRegex } from '../helpers';

dotenv.config();

describe('About Us Page tests', () => {
  describe('Getting About Us', () => {
    let data: Awaited<ReturnType<typeof getAboutUs>>;
    beforeAll(async () => {
      data = await getAboutUs();
    });

    test('Should return an AboutUs object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
      expect(data).toEqual(
        expect.objectContaining<AboutUs>({
          aboutUs: expect.any(String),
        }),
      );
    });
  });

  describe('Infographic Timeline tests', () => {
    let data: Awaited<Promise<ReturnType<typeof getInfographicTimelines>>>;
    beforeAll(async () => {
      data = await getInfographicTimelines();
    });

    test('Should return an array containing InfographicTimeline element', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      const expectedElement = expect.objectContaining<InfographicTimeline>({
        description: expect.any(String),
        startDate: expect.stringMatching(dateStringRegex),
        endDate: expect.stringMatching(dateStringRegex),
      });

      expect(data).toContainEqual(expectedElement);
    });
  });
});
