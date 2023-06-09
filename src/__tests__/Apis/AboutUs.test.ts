import dotenv from 'dotenv';
import { getAboutUs, getInfographicTimelines } from 'src/Apis/AboutUs';
import { dateStringRegex } from '../helpers';
import type { AboutUs, InfographicTimeline } from '../../Types/CommonTypes';

dotenv.config();

describe('About Us Page tests', () => {
  describe('Getting About Us', () => {
    let data: Awaited<Promise<AboutUs>>;
    beforeAll(async () => {
      data = await getAboutUs();
    });

    test('Should return an AboutUs object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
      expect(data).toEqual(
        expect.objectContaining<AboutUs>({
          aboutUs: expect.any(String),
        })
      );
    });
  });

  describe('Infographic Timeline tests', () => {
    let data: Awaited<Promise<InfographicTimeline[]>>;
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
