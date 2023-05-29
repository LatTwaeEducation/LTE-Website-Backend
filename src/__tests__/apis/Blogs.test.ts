import dotenv from 'dotenv';
import type { BlogTag } from '../../types';
import { getAllTags } from '../../apis/Blogs';
import { testHasPropertyAndType } from '../helpers';

dotenv.config();

describe('Blogs Page Test', () => {
  describe('Getting All Tags Test', () => {
    let data: Awaited<Promise<BlogTag[]>>;

    beforeAll(async () => {
      data = await getAllTags();
    });

    test('Should return an array', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();
    });

    test('Each element should have property `name` with type `string`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'name', 'string');
      });
    });

    test('Each element should have property `id` with type `string`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'id', 'string');
      });
    });
  });
});
