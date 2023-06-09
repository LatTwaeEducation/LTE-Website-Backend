import dotenv from 'dotenv';
import { expect } from '@jest/globals';
import * as Home from 'src/Apis/Home';
import { dateStringRegex, expectAssetObject, testHasPropertyAndType, testIsAsset } from '../helpers';
import type { AppAdvertisement, HomeTopBanner, Partnership, Testimonial } from '../../Types/CommonTypes';
import type { BlogCard } from '../../Types/Blogs/Blog';

dotenv.config();

// TODO: Rewrite Tests with jest objects.
describe('Home Page API tests', () => {
  describe('Getting Home Top Banner', () => {
    let data: Awaited<Promise<HomeTopBanner>>;

    beforeAll(async () => {
      data = await Home.getHomeTopBanner();
    });

    test('Should return an object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });

    test('Should equal to HomeTopBanner', () => {
      expect(data).toEqual(
        expect.objectContaining({
          title: expect.any(String),
          body: expect.any(String),
          learnMoreLink: expect.any(String),
        })
      );
    });
  });

  describe('Getting Courses', () => {
    test('Should return an object with properties juniorCourses, youthCourses, everyoneCourses, igcseCourses, with type `string[]`.', async () => {
      const data = await Home.getCourses();
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');

      expect(data).toHaveProperty('juniorCourses');
      expect(data).toHaveProperty('youthCourses');
      expect(data).toHaveProperty('everyoneCourses');
      expect(data).toHaveProperty('igcseCourses');

      expect(Array.isArray(data.juniorCourses)).toBeTruthy();
      expect(Array.isArray(data.youthCourses)).toBeTruthy();
      expect(Array.isArray(data.everyoneCourses)).toBeTruthy();
      expect(Array.isArray(data.igcseCourses)).toBeTruthy();

      data.juniorCourses.forEach((course) => expect(typeof course).toBe('string'));
      data.youthCourses.forEach((course) => expect(typeof course).toBe('string'));
      data.everyoneCourses.forEach((course) => expect(typeof course).toBe('string'));
      data.igcseCourses.forEach((course) => expect(typeof course).toBe('string'));
    });
  });

  describe('Getting Activity Events', () => {
    test('Should return an array of objects with properties `id` and `thumbnail`, with type `string` and `Asset`, and the counts should be less than or equal to 3', async () => {
      const data = await Home.getActivitiesEvents();

      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();
      expect(data.length).toBeLessThanOrEqual(3);

      data.forEach((activityEvent) => {
        expect(activityEvent).toBeDefined();
        expect(typeof activityEvent).toBe('object');

        testHasPropertyAndType(activityEvent, 'id', 'string');
        testIsAsset(activityEvent.thumbnail);

        testHasPropertyAndType(activityEvent, 'thumbnail', 'object');
      });
    });
  });

  describe('Getting Testimonials', () => {
    let data: Awaited<
      Promise<{
        testimonials: Testimonial[];
        recruitmentFormLink: string;
      }>
    >;

    beforeEach(async () => {
      data = await Home.getTestimonials();
    });

    test('Should return an object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');

      const expected = expect.objectContaining({
        testimonials: expect.any(Array<Testimonial>),
        recruitmentFormLink: expect.any(String),
      });

      expect(data).toMatchObject(expected);
    });
  });

  describe('Getting Partnerships', () => {
    let data: Awaited<
      Promise<{
        partnerships: Partnership[];
        partnershipFormLink: string;
      }>
    >;

    beforeEach(async () => {
      data = await Home.getPartnerships();
    });

    test('Should return an object containing partnerships and partnershipFormLink', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');

      const expected = expect.objectContaining({
        partnerships: expect.any(Array<Partnership>),
        partnershipFormLink: expect.any(String),
      });
      expect(data).toMatchObject(expected);
    });
  });

  describe('Getting App Advertisement', () => {
    let data: Awaited<Promise<AppAdvertisement>>;

    beforeAll(async () => {
      data = await Home.getAppAdvertisement();
    });

    test('Should return an AppAdvertisement object', () => {
      expect(data).toBeDefined();
      const expectedResponse = expect.objectContaining({
        title: expect.any(String),
        body: expect.any(String),
        featureImage: expect.assetOrNull(),
        appStoreLink: expect.stringOrNull(),
        googlePlayLink: expect.stringOrNull(),
      });

      expect(data).toMatchObject(expectedResponse);
    });
  });

  describe('Getting Blogs', () => {
    let data: Awaited<Promise<BlogCard[]>>;

    beforeAll(async () => {
      data = await Home.getBlogs();
    });

    test('Should return an array length <= 3', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();
      expect(data.length).toBeLessThanOrEqual(3);
    });

    test('Each element should be BlogCard', () => {
      const expectedElement = expect.objectContaining({
        id: expect.any(String),
        description: expect.any(String),
        createdAt: expect.stringMatching(dateStringRegex),
        title: expect.any(String),
        thumbnail: expectAssetObject,
        tags: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
          }),
        ]),
      });
      expect(data).toContainEqual(expectedElement);
    });
  });
});
