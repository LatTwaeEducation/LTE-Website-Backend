import dotenv from 'dotenv';
import * as ContactUs from 'src/apis/ContactUs';
import { testHasPropertyAndType } from '../helpers';
import type { ContactInfo, SocialMediaLinks } from '../../types';

dotenv.config();

describe('Contact Us Page API tests', () => {
  describe('Getting Contact Info', () => {
    let data: Awaited<Promise<ContactInfo>>;

    beforeEach(async () => {
      data = await ContactUs.getContactInfo();
    });

    test('Should return an object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });

    test('Should have property `name` with type `string`', () => {
      testHasPropertyAndType(data, 'name', 'string');
    });

    test('Should have property `content` with type string', () => {
      testHasPropertyAndType(data, 'content', 'string');
    });

    test('Should have property `btnContent` as `string?`', () => {
      testHasPropertyAndType(data, 'btnContent', 'string', true);
    });

    test('Should have property `phoneNumbers` with type `string[]?`', () => {
      testHasPropertyAndType(data, 'phoneNumbers', 'array', true);
      data.phoneNumbers?.forEach((phone) => {
        expect(phone).toBeDefined();
        expect(typeof phone).toBe('string');
      });
    });

    test('Should have property `emailAddresses` with type `string[]?`', () => {
      testHasPropertyAndType(data, 'emailAddresses', 'array', true);
      data.emailAddresses?.forEach((email) => {
        expect(email).toBeDefined();
        expect(typeof email).toBe('string');
      });
    });

    test('Should have property `address` with type `string?`', () => {
      testHasPropertyAndType(data, 'address', 'string', true);
    });
  });
  describe('Getting Social Media', () => {
    let data: Awaited<Promise<SocialMediaLinks>>;
    beforeEach(async () => {
      data = await ContactUs.getSocialMediaLinks();
    });

    test('Should return an object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
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
  });
});
