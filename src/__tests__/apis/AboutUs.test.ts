import dotenv from 'dotenv';
import { hasPropertiesAndTypes } from '../helpers';
import { getInfographicTimelines } from 'src/apis/AboutUs';

dotenv.config();

describe('About Us Page tests', () => {
  describe('Infographic Timeline tests', () => {
    const expectedShouldInclude = {
      startDate: Date,
      endDate: [Date, null],
      description: 'string',
    };

    test(`Should return an array of objects with properties ${Object.keys(expectedShouldInclude).join(
      ', '
    )}`, async () => {
      const data = await getInfographicTimelines();
      expect(Array.isArray(data)).toBeTruthy();
      expect(data.every((infographic) => hasPropertiesAndTypes(infographic, expectedShouldInclude))).toBeTruthy();
    });
  });
});
