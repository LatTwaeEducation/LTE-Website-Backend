import dotenv from 'dotenv';
import { getAllTags } from '../../Apis/Blogs';
import { BlogTag } from '../../Types/Blogs/Blog';

dotenv.config();

describe('Blogs Page Test', () => {
  describe('Getting All Tags Test', () => {
    let data: Awaited<Promise<BlogTag[]>>;

    beforeAll(async () => {
      data = await getAllTags();
    });

    test('Should return an array containing BlogTag', () => {
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
