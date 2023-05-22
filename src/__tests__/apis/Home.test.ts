import dotenv from 'dotenv';
import * as Home from 'src/apis/Home';
import { testHasPropertyAndType, testIsAsset } from '../helpers';
import type { AppAdvertisement, HomeTopBanner, Partnership, Testimonial } from '../../types';

dotenv.config();

describe('Home Page API tests', () => {
  describe('Getting Home Top Banner', () => {
    let data: Awaited<Promise<HomeTopBanner>>;

    beforeEach(async () => {
      data = await Home.getHomeTopBanner();
    });

    test('Should return an object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });

    test('Should have property `title` with type `string`', () => {
      testHasPropertyAndType(data, 'title', 'string');
    });

    test('Should have property `body` with type `string`', () => {
      testHasPropertyAndType(data, 'body', 'string');
    });

    test('Should have property `learnMoreLink` with type `string`', () => {
      testHasPropertyAndType(data, 'learnMoreLink', 'string');
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
    });

    test('Should have property `recruitmentFormLink` with type `string`', () => {
      testHasPropertyAndType(data, 'recruitmentFormLink', 'string');
    });

    test('Should have property `testimonials` with type `array`', () => {
      testHasPropertyAndType(data, 'testimonials', 'array');
    });

    test('Each testimonial should have property `feedback` with type `string`', () => {
      data.testimonials.forEach((testimonial) => {
        testHasPropertyAndType(testimonial, 'feedback', 'string');
      });
    });

    test('Each testimonial should have property `name` with type `string`', () => {
      data.testimonials.forEach((testimonial) => {
        testHasPropertyAndType(testimonial, 'name', 'string');
      });
    });

    test('Each testimonial should have property `occupation` with type `string`', () => {
      data.testimonials.forEach((testimonial) => {
        testHasPropertyAndType(testimonial, 'occupation', 'string');
      });
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

    test('Should return an object', () => {
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });

    test('Should have property `partnershipFormLink` with type `string`', () => {
      testHasPropertyAndType(data, 'partnershipFormLink', 'string');
    });

    test('Should have property `partnerships` with type `array`', () => {
      testHasPropertyAndType(data, 'partnerships', 'array');
    });

    test('Each partnership should have property `logo` with type `Asset`', () => {
      data.partnerships.forEach((partnership) => {
        testHasPropertyAndType(partnership, 'logo', 'asset');
      });
    });

    test('Each testimonial should have property `company` with type `string`', () => {
      data.partnerships.forEach((partnership) => {
        testHasPropertyAndType(partnership, 'company', 'string');
      });
    });
  });

  describe('Getting App Advertisement', () => {
    let data: Awaited<Promise<AppAdvertisement>>;

    beforeEach(async () => {
      data = await Home.getAppAdvertisement();
    });

    test('Should return an object', () => {
      expect(data).toBeDefined();
    });

    test('Should have property `featureImage` as type `Asset`', () => {
      testHasPropertyAndType(data, 'featureImage', 'asset', true);
    });

    test('Should have property `title` as type `string`', () => {
      testHasPropertyAndType(data, 'title', 'string');
    });

    test('Should have property `body` as type `string`', () => {
      testHasPropertyAndType(data, 'body', 'string');
    });

    test('Should have property `googlePlayLink` as type `string?`', () => {
      testHasPropertyAndType(data, 'googlePlayLink', 'string', true);
    });

    test('Should have property `appStoreLink` as type `string?', () => {
      testHasPropertyAndType(data, 'appStoreLink', 'string', true);
    });
  });

  describe('Getting Blogs', () => {
    test('Should return an array of objects with properties `id`, `thumbnail`, `title`, `publishedAt`, `description`, with types `string`, `Asset`, `string`, `Date`, `string`, and counts of less than or equal to 3', async () => {
      const data = await Home.getBlogs();

      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();
      expect(data.length).toBeLessThanOrEqual(3);

      data.forEach((blog) => {
        expect(blog).toBeDefined();
        expect(typeof blog).toBe('object');

        testHasPropertyAndType(blog, 'id', 'string');

        testHasPropertyAndType(blog, 'thumbnail', 'object');
        testIsAsset(blog.thumbnail);

        testHasPropertyAndType(blog, 'title', 'string');

        testHasPropertyAndType(blog, 'publishedAt', 'object');
        expect(blog.publishedAt instanceof Date).toBeTruthy();

        testHasPropertyAndType(blog, 'description', 'string', true);
      });
    });
  });
});
