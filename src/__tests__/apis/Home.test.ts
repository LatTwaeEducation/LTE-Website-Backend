import dotenv from 'dotenv';
import * as Home from 'src/apis/Home';
import { testHasPropertyAndType, testIsAsset } from '../helpers';

dotenv.config();

describe('Home Page API tests', () => {
  describe('Getting Home Top Banner', () => {
    test('Should return a object with properties `title`, `body`, `learnMoreLink`, with types `string`, `string`, `string`.', async () => {
      const data = await Home.getHomeTopBanner();
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');

      testHasPropertyAndType(data, 'title', 'string');
      testHasPropertyAndType(data, 'body', 'string');
      testHasPropertyAndType(data, 'learnMoreLink', 'string');
    });
  });

  describe('Getting Mission and Vision', () => {
    test('Should return an object with properties `mission` and `vision`, with type `string`.', async () => {
      const data = await Home.getMissionVision();
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');

      testHasPropertyAndType(data, 'mission', 'string');
      testHasPropertyAndType(data, 'vision', 'string');
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
    test('Should return array of objects wth properties `feedback`, `name` and `occupation`, with type `string`, `string`, and `string`. ', async () => {
      const data = await Home.getTestimonials();

      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((testimonial) => {
        expect(testimonial).toBeDefined();
        expect(typeof testimonial).toBe('object');

        testHasPropertyAndType(testimonial, 'feedback', 'string');
        testHasPropertyAndType(testimonial, 'name', 'string');
        testHasPropertyAndType(testimonial, 'occupation', 'string');
      });
    });
  });

  describe('Getting Partnerships', () => {
    test('Should return an array of objects with properties `logo` and `company`, with type `Asset` and `string`.', async () => {
      const data = await Home.getPartnerships();
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((partnership) => {
        expect(partnership).toBeDefined();
        expect(typeof partnership).toBe('object');

        testHasPropertyAndType(partnership, 'logo', 'object');
        testIsAsset(partnership.logo);

        testHasPropertyAndType(partnership, 'company', 'string');
      });
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
