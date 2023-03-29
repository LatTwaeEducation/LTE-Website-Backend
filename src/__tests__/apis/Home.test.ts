import dotenv from 'dotenv';
import * as Home from 'src/apis/Home';

dotenv.config();

const deepPropertiesCheck = (obj: object, props: string[]) => {
  return props.every((prop) => Object.hasOwn(obj, prop));
};

const isOfTypeAsset = (obj: object) => {
  return deepPropertiesCheck(obj, ['url', 'title']);
};

describe('Home API tests', () => {
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
    const properties = ['thumbnail', 'id'];

    test(`Should return an array of objects with properties ${properties.join(
      ', '
    )}, and the counts should be less than or equal to 3`, async () => {
      const data = await Home.getActivitiesEvents();

      expect(Array.isArray(data)).toBeTruthy();
      expect(data.length).toBeLessThanOrEqual(3);

      expect(
        data.every(
          (activityEvent) => deepPropertiesCheck(activityEvent, properties) && isOfTypeAsset(activityEvent.thumbnail)
        )
      ).toBeTruthy();
    });
  });

  describe('Getting Testmonials', () => {
    test('Should return array of objects with properties feedback, name, occupation', async () => {
      const data = await Home.getTestimonials();

      expect(Array.isArray(data)).toBeTruthy();
      expect(
        data.every(
          (testmonial) =>
            Object.hasOwn(testmonial, 'feedback') &&
            Object.hasOwn(testmonial, 'name') &&
            Object.hasOwn(testmonial, 'occupation')
        )
      ).toBeTruthy();
    });
  });

  describe('Getting Partnerships', () => {
    const properties = ['logo', 'company'];
    test(`Should return an array of objects with properties ${properties.join(', ')}`, async () => {
      const data = await Home.getPartnerships();

      expect(Array.isArray(data)).toBeTruthy();
      expect(
        data.every((partnership) => deepPropertiesCheck(partnership, properties) && isOfTypeAsset(partnership.logo))
      ).toBeTruthy();
    });
  });

  describe('Getting Blogs', () => {
    const properties = ['id', 'thumbnail', 'title', 'published', 'description'];
    test(`Should return an array of objects with properties ${properties.join(
      ', '
    )}, and counts of less than or equal to 3`, async () => {
      const data = await Home.getBlogs();

      expect(Array.isArray(data)).toBeTruthy();
      expect(data.length).toBeLessThanOrEqual(3);
      expect(data.every((blog) => deepPropertiesCheck(blog, properties) && isOfTypeAsset(blog.thumbnail)));
    });
  });
});
