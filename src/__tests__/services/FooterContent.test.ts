import dotenv from 'dotenv';
import * as FooterContent from 'src/services/FooterContent';
import { testHasPropertyAndType } from '../helpers';

dotenv.config();

describe('FooterContent Service', () => {
  test('Should return an object with `aboutUs`, `emailAddress`, `phoneNumbers`, `facebookLink`, `facebookGroupLink`, `instagramLink`, `linkedinLink`, `youtubeLink`, `twitterLink`, `telegramLink`, with most type `string`, phoneNumbers and emailAddresses `string[]`', async () => {
    const data = await FooterContent.default();
    expect(data).toBeDefined();
    expect(typeof data).toBe('object');

    testHasPropertyAndType(data, 'aboutUs', 'string');

    testHasPropertyAndType(data, 'emailAddresses', 'object', true);
    if (data.emailAddresses) {
      expect(Array.isArray(data.emailAddresses)).toBeTruthy();
      data.emailAddresses.forEach((emailAddress) => {
        expect(emailAddress).toBeDefined();
        expect(typeof emailAddress).toBe('string');
      });
    }

    testHasPropertyAndType(data, 'phoneNumbers', 'object', true);
    if (data.phoneNumbers) {
      expect(Array.isArray(data.phoneNumbers)).toBeTruthy();
      data.phoneNumbers.forEach((phoneNumbers) => {
        expect(phoneNumbers).toBeDefined();
        expect(typeof phoneNumbers).toBe('string');
      });
    }

    testHasPropertyAndType(data, 'facebookLink', 'string', true);
    testHasPropertyAndType(data, 'facebookGroupLink', 'string', true);
    testHasPropertyAndType(data, 'instagramLink', 'string', true);
    testHasPropertyAndType(data, 'linkedinLink', 'string', true);
    testHasPropertyAndType(data, 'youtubeLink', 'string', true);
    testHasPropertyAndType(data, 'twitterLink', 'string', true);
    testHasPropertyAndType(data, 'telegramLink', 'string', true);
  });
});
