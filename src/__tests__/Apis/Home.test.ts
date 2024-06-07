import * as Home from '@apis/Home';
import { beforeAll, expect } from '@jest/globals';
import dotenv from 'dotenv';

dotenv.config();

// TODO: Rewrite Tests with jest objects.
describe('Home Page API tests', () => {
  describe('Getting Home Top Banner', () => {
    let data: Awaited<Promise<ReturnType<typeof Home.getHomeTopBanner>>>;

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
        }),
      );
    });
  });

  describe('Getting Courses', () => {
    test('Should return an object with properties juniorCourses, youthCourses, everyoneCourses, igcseCourses, with type `string[]`.', async () => {
      const data = await Home.getCourses();
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });
  });

  describe('Getting Activity Events', () => {
    let data: Awaited<ReturnType<typeof Home.getActivitiesEvents>>;

    beforeAll(async () => {
      data = await Home.getActivitiesEvents();
    });

    test('Should return an array of ActivityEventBanner instances', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((item) => {
        expect(typeof item).toBe('object');
      });
    });

    test('Should have length less than or equal to 3', () => {
      expect(data.length).toBeLessThanOrEqual(3);
    });
  });

  describe('Getting Testimonials', () => {
    test('Should return an object', async () => {
      const data = await Home.getTestimonials();
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });
  });

  describe('Getting Partnerships', () => {
    test('Should return an object containing partnerships and partnershipFormLink', async () => {
      const data = await Home.getPartnerships();
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });
  });

  describe('Getting App Advertisement', () => {
    test('Should return an AppAdvertisement object', async () => {
      const data = await Home.getAppAdvertisement();
      expect(data).toBeDefined();
    });
  });

  describe('Getting Blogs', () => {
    let data: Awaited<ReturnType<typeof Home.getBlogs>>;
    beforeAll(async () => {
      data = await Home.getBlogs();
    });

    test('Should return an array length <= 3', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();
      expect(data.length).toBeLessThanOrEqual(3);
    });
  });
});
