import dotenv from 'dotenv';
import type { BlogCard } from '../../types';
import { getBlogs } from '../../apis/Blogs';
import { dateStringRegex, testHasPropertyAndType } from '../helpers';

dotenv.config();
describe('BlogCards Test', () => {
  describe('Getting All Blogs Test', () => {
    let data: Awaited<Promise<BlogCard[]>>;

    beforeAll(async () => {
      data = await getBlogs();
    });

    test('Should return an array', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();
    });

    test('Each element should have property `tags` with type `BlogTag[]`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'tags', 'array', true);

        element.tags?.forEach((tag) => {
          testHasPropertyAndType(tag, 'name', 'string');
          testHasPropertyAndType(tag, 'id', 'string');
        });
      });
    });

    test('Each element should have property `id` with type `string`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'id', 'string');
      });
    });

    test('Each element should have property `thumbnail` with type `Asset`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'thumbnail', 'asset');
      });
    });

    test('Each element should have property `title` with type `string`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'title', 'string');
      });
    });

    test('Each element should have property `createdAt` with type `string`, and has format as `22 Aug 2022`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'createdAt', 'string');
        expect(element.createdAt).toMatch(dateStringRegex);
      });
    });

    test('Each element should have property `description` with type `string`', () => {
      data.forEach((element) => {
        testHasPropertyAndType(element, 'description', 'string');
      });
    });
  });

  describe('Getting Blogs according to limit', () => {
    let data: Awaited<Promise<BlogCard[]>>;
    const limit = 3;

    beforeEach(async () => {
      data = await getBlogs({ limit });
    });

    test(`Should return an array of length less than or equal to ${limit}`, () => {
      expect(data.length).toBeLessThanOrEqual(3);
    });
  });

  describe('Getting Blogs according to tags', () => {
    describe('Getting Blogs with one tag', () => {
      let data: Awaited<Promise<BlogCard[]>>;
      const tagIds = ['chatGpt'];

      beforeEach(async () => {
        data = await getBlogs({ tagIds });
      });

      test(`All elements should have the tag ${tagIds[0]}.`, () => {
        expect(data.every((element) => element.tags?.some((tag) => tagIds.includes(tag.id)))).toBeTruthy();
      });
    });
    describe('Getting Blogs with two or more tags', () => {
      let data: Awaited<Promise<BlogCard[]>>;
      const tagIds = ['chatGpt', 'uiux'];

      beforeEach(async () => {
        data = await getBlogs({ tagIds });
      });

      test(`Elements should have one of the tags, ${tagIds.join(',')}`, () => {
        expect(
          data.every((element) => {
            const tags = element.tags?.map((tag) => tag.id);
            return tags?.some((tag) => tagIds.includes(tag));
          })
        ).toBeTruthy();
      });
    });
  });
});
