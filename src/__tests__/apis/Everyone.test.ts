import dotnev from 'dotenv';
import { getEveryoneCourses } from 'src/apis/Everyone';
import { hasPropertiesAndTypes } from '../helpers';

dotnev.config();

describe('Everyone Page API tests', () => {
  const properties = {
    id: 'string',
    name: 'string',
    duration: 'number',
    students: 'number',
    classCategory: 'string',
  };

  describe('Everyone Courses tests', () => {
    test(`Should return an array of objects with properties ${Object.keys(properties).join(
      ', '
    )}, and have classCategory as Everyone`, async () => {
      const data = await getEveryoneCourses();
      expect(Array.isArray(data)).toBeTruthy();
      expect(data.every((course) => hasPropertiesAndTypes(course, properties))).toBeTruthy();
      expect(data.every((course) => course.classCategory === 'Everyone')).toBeTruthy();
    });
  });
});
