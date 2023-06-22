import dotenv from 'dotenv';
import { beforeAll, expect } from '@jest/globals';
import * as Home from 'src/Apis/Home';
import { dateStringRegex, expectAssetObject } from '../helpers';
import type { AppAdvertisement, HomeTopBanner, Partnership, Testimonial } from '../../Types/CommonTypes';
import type { BlogCard } from '../../Types/Blogs/Blog';
import { AllCoursesAndSettings } from '../../Types/Courses/AllCoursesAndSettings';
import { getActivitiesEvents } from 'src/Apis/Home';
import { ActivityEventBanner } from '../../Types/ActivitiesEvents/ActivityEventBanner';

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

      expect(data).toBeInstanceOf(AllCoursesAndSettings);
    });
  });

  describe('Getting Activity Events', () => {
    let data: Awaited<ReturnType<typeof getActivitiesEvents>>;

    beforeAll(async () => {
      data = await getActivitiesEvents();
    });

    test('Should return an array of ActivityEventBanner instances', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((item) => {
        expect(item).toBeInstanceOf(ActivityEventBanner);
      });
    });

    test('Should have length less than or equal to 3', () => {
      expect(data.length).toBeLessThanOrEqual(3);
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
