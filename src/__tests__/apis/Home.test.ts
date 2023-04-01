import dotenv from 'dotenv';
import * as Home from 'src/apis/Home';
import { hasPropertiesAndTypes, isOfTypeAsset } from '../helpers';

dotenv.config();

describe('Home Page API tests', () => {
  describe('Getting Courses', () => {
    test(`Should return an object with properties juniorCourses, youthCourses, everyoneCourses, igcseCourses, each with values of string array`, async () => {
      const data = await Home.getCourses();
      expect(typeof data).toBe('object');
      expect(data).toHaveProperty('juniorCourses');
      expect(data).toHaveProperty('youthCourses');
      expect(data).toHaveProperty('everyoneCourses');
      expect(data).toHaveProperty('igcseCourses');

      expect(Array.isArray(data.juniorCourses)).toBeTruthy();
      expect(Array.isArray(data.youthCourses)).toBeTruthy();
      expect(Array.isArray(data.everyoneCourses)).toBeTruthy();
      expect(Array.isArray(data.igcseCourses)).toBeTruthy();

      expect(data.juniorCourses.every((course) => typeof course === 'string')).toBeTruthy();
      expect(data.youthCourses.every((course) => typeof course === 'string')).toBeTruthy();
      expect(data.everyoneCourses.every((course) => typeof course === 'string')).toBeTruthy();
      expect(data.igcseCourses.every((course) => typeof course === 'string')).toBeTruthy();
    });
  });

  describe('Getting Activity Events', () => {
    const expected = {
      thumbnails: 'object',
      id: 'string',
    };

    test(`Should return an array of objects with properties ${Object.keys(expected).join(
      ', '
    )}, and the counts should be less than or equal to 3`, async () => {
      const data = await Home.getActivitiesEvents();

      expect(Array.isArray(data)).toBeTruthy();
      expect(data.length).toBeLessThanOrEqual(3);

      expect(
        data.every(
          (activityEvent) => hasPropertiesAndTypes(activityEvent, expected) && isOfTypeAsset(activityEvent.thumbnail)
        )
      ).toBeTruthy();
    });
  });

  describe('Getting Testmonials', () => {
    const expected = {
      feedback: 'string',
      name: 'string',
      occupation: 'string',
    };

    test(`Should return array of objects with properties ${Object.keys(expected).join(', ')}`, async () => {
      const data = await Home.getTestimonials();

      expect(Array.isArray(data)).toBeTruthy();
      expect(data.every((testimonial) => hasPropertiesAndTypes(testimonial, expected))).toBeTruthy();
    });
  });

  describe('Getting Partnerships', () => {
    const expected = {
      logo: 'object',
      company: 'string',
    };
    test(`Should return an array of objects with properties ${Object.keys(expected).join(', ')} `, async () => {
      const data = await Home.getPartnerships();

      expect(Array.isArray(data)).toBeTruthy();
      expect(
        data.every((partnership) => hasPropertiesAndTypes(partnership, expected) && isOfTypeAsset(partnership.logo))
      ).toBeTruthy();
    });
  });

  describe('Getting Blogs', () => {
    const expected = {
      id: 'string',
      thumbnail: 'object',
      title: 'string',
      published: Date,
      description: 'string',
    };

    test(`Should return an array of objects with properties ${Object.keys(expected).join(
      ', '
    )}, and counts of less than or equal to 3`, async () => {
      const data = await Home.getBlogs();

      expect(Array.isArray(data)).toBeTruthy();
      expect(data.length).toBeLessThanOrEqual(3);
      expect(data.every((blog) => hasPropertiesAndTypes(blog, expected) && isOfTypeAsset(blog.thumbnail)));
    });
  });
});
