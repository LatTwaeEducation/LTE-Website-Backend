import dotenv from 'dotenv';
import * as FooterContent from 'src/Services/FooterContent';
import { testHasPropertyAndType } from '../helpers';
import type { FooterContent as FooterContentType } from '../../Types/CommonTypes';

dotenv.config();

describe('FooterContent Service', () => {
  let data: Awaited<Promise<FooterContentType>>;

  beforeEach(async () => {
    data = await FooterContent.default();
  });

  test('Should return an object', () => {
    expect(data).toBeDefined();
    expect(typeof data).toBe('object');
  });

  test('Should have property `aboutUs` with type `string`', () => {
    testHasPropertyAndType(data, 'aboutUs', 'string');
  });

  test('Should have property `phoneNumbers` with type `string[]?`', () => {
    testHasPropertyAndType(data, 'phoneNumbers', 'array', true);
    data.phoneNumbers?.forEach((phone) => {
      expect(typeof phone).toBe('string');
    });
  });

  test('Should have property `emailAddresses` with type `string[]?`', () => {
    testHasPropertyAndType(data, 'emailAddresses', 'array', true);
    data.emailAddresses?.forEach((email) => {
      expect(typeof email).toBe('string');
    });
  });

  test('Should have property `facebookLink` with type `string?`', () => {
    testHasPropertyAndType(data, 'facebookLink', 'string', true);
  });

  test('Should have property `facebookGroupLink` with type `string?`', () => {
    testHasPropertyAndType(data, 'facebookGroupLink', 'string', true);
  });

  test('Should have property `instagramLink` with type `string?`', () => {
    testHasPropertyAndType(data, 'instagramLink', 'string', true);
  });

  test('Should have property `linkedinLink` with type `string?`', () => {
    testHasPropertyAndType(data, 'linkedinLink', 'string', true);
  });

  test('Should have property `youtubeLink` with type `string?`', () => {
    testHasPropertyAndType(data, 'youtubeLink', 'string', true);
  });

  test('Should have property `twitterLink` with type `string?`', () => {
    testHasPropertyAndType(data, 'twitterLink', 'string', true);
  });

  test('Should have property `telegramLink` with type `string?`', () => {
    testHasPropertyAndType(data, 'telegramLink', 'string', true);
  });

  test('Should have property `googlePlayLink` with type `string?`', () => {
    testHasPropertyAndType(data, 'googlePlayLink', 'string', true);
  });

  test('Should have property `appStoreLink` with type `string?`', () => {
    testHasPropertyAndType(data, 'appStoreLink', 'string', true);
  });
});
