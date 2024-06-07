import * as ContactUs from '@apis/ContactUs';
import { expect } from '@jest/globals';
import dotenv from 'dotenv';

dotenv.config();

describe('Contact Us Page API tests', () => {
  describe('Getting Contact Info', () => {
    let data: Awaited<Promise<ReturnType<typeof ContactUs.getContactInfo>>>;

    beforeEach(async () => {
      data = await ContactUs.getContactInfo();
    });

    test('Should return an ContactInfo object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');

      const expected = expect.objectContaining({
        name: expect.any(String),
        content: expect.any(String),
        btnContent: expect.stringOrNull(),
        phoneNumbers: expect.any(Array<string>),
        emailAddresses: expect.any(Array<string>),
        address: expect.stringOrNull(),
      });

      expect(data).toMatchObject(expected);
    });
  });
  describe('Getting Social Media', () => {
    let data: Awaited<Promise<ReturnType<typeof ContactUs.getSocialMediaLinks>>>;
    beforeEach(async () => {
      data = await ContactUs.getSocialMediaLinks();
    });

    test('Should return an SocialMediaLinks object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');

      const expected = expect.objectContaining({
        facebookLink: expect.stringOrNull(),
        facebookGroupLink: expect.stringOrNull(),
        instagramLink: expect.stringOrNull(),
        linkedinLink: expect.stringOrNull(),
        youtubeLink: expect.stringOrNull(),
        twitterLink: expect.stringOrNull(),
        telegramLink: expect.stringOrNull(),
      });
      expect(data).toMatchObject(expected);
    });
  });
});
