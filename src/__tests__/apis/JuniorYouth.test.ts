import dotnev from 'dotenv';
import { getJuniorCourses, getYouthCourses } from 'src/apis/JuniorYouth';
import { hasPropertiesAndTypes } from '../helpers';

dotnev.config();

describe('Junior and Youth Page API tests', () => {
  const properties = {
    id: 'string',
    name: 'string',
    duration: 'number',
    students: 'number',
    classCategory: 'string',
  };

  describe('Junior Courses tests', () => {
    test(`Should return an array of objects with properties ${Object.keys(properties).join(
      ', '
    )}, and have classCategory as Junior`, async () => {
      const data = await getJuniorCourses();
      expect(Array.isArray(data)).toBeTruthy();
      expect(data.every((course) => hasPropertiesAndTypes(course, properties))).toBeTruthy();
      expect(data.every((course) => course.classCategory === 'Junior')).toBeTruthy();
    });
  });

  describe('Youth Courses tests', () => {
    test(`Should return an array of objects with properties ${Object.keys(properties).join(
      ', '
    )}, and have classCategory as Youth`, async () => {
      const data = await getYouthCourses();
      expect(Array.isArray(data)).toBeTruthy();
      expect(data.every((course) => hasPropertiesAndTypes(course, properties))).toBeTruthy();
      expect(data.every((course) => course.classCategory === 'Youth')).toBeTruthy();
    });
  });
});
