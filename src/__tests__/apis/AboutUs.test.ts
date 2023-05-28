import dotenv from 'dotenv';
import { getAboutUs, getInfographicTimelines } from 'src/apis/AboutUs';
import { dateStringRegex, testHasPropertyAndType } from '../helpers';
import { AboutUs, InfographicTimeline } from '../../types';

dotenv.config();

describe('About Us Page tests', () => {
  describe('Getting About Us', () => {
    let data: Awaited<Promise<AboutUs>>;
    beforeEach(async () => {
      data = await getAboutUs();
    });

    test('Should return an object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });

    test('Should have property `aboutUs`, with type `string`', () => {
      testHasPropertyAndType(data, 'aboutUs', 'string');
    });
  });

  describe('Infographic Timeline tests', () => {
    let data: Awaited<Promise<InfographicTimeline[]>>;
    beforeEach(async () => {
      data = await getInfographicTimelines();
    });

    test('Should return an array', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();
    });

    test('Each element should have property `startDate` with type `string` and have format as `25 Aug 2022`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'startDate', 'string');
        expect(element.startDate).toMatch(dateStringRegex);
      });
    });

    test('Each element should have property `endDate` with type `string?` and have format as `25 Aug 2022`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'endDate', 'string', true);
        if (element.endDate) {
          expect(element.endDate).toMatch(dateStringRegex);
        }
      });
    });

    test('Each element should have property `description` with type `string`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'description', 'string');
      });
    });
  });
});
