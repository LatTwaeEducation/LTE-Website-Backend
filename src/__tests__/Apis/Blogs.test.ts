/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getAllTags } from '@apis/Blogs';
import dotenv from 'dotenv';

dotenv.config();

describe('Blogs Page Test', () => {
  describe('Getting All Tags Test', () => {
    test('Should return an array containing BlogTag', async () => {
      const data = await getAllTags();
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      const expected = expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
      });

      expect(data).toContainEqual(expected);
    });
  });
});
