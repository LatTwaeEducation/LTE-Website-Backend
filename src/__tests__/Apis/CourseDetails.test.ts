import dotenv from 'dotenv';
import { beforeAll, describe, expect } from '@jest/globals';
import axios from 'axios';
import * as process from 'process';
import { getCourseDetails, getRelatedCourses } from '../../Apis/CourseDetails';
import { generateUrl, URL } from '../../Services/UrlGenerator';
import { ContentfulRESTArrayResponse } from '../../Types/Contentful/ResponseTypes';
import { CourseDetails } from '../../Types/Courses/CourseDetails';
import { ClassCategory } from '../../Types/CommonTypes';
import { CourseCard } from '../../Types/Courses/CourseCard';

dotenv.config();

describe('Course Details Page API Tests', () => {
  type AllCoursesIdNameCategory = ContentfulRESTArrayResponse<{
    sys: {
      id: string;
    };
    fields: {
      name: string;
      classCategory: ClassCategory;
    };
  }>;

  let allCourses;

  let id: string;
  let name: string;
  let classCategory: ClassCategory;
  beforeAll(async () => {
    const url = `${generateUrl(URL.CDN)}/entries?content_type=course&select=fields.name,sys.id,fields.classCategory`;

    allCourses = await axios.get<AllCoursesIdNameCategory>(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
      },
    });

    id = allCourses.data.items[0].sys.id;
    name = allCourses.data.items[0].fields.name;
    classCategory = allCourses.data.items[0].fields.classCategory;
  });
  describe('Getting Course Details Tests', () => {
    let data: Awaited<Promise<CourseDetails>>;

    beforeAll(async () => {
      data = await getCourseDetails(id);
    });

    test('Should return a CourseDetails instance', async () => {
      expect(data).toBeDefined();
      expect(data).toBeInstanceOf(CourseDetails);
    });

    test('Should have same id and name as the course requested', () => {
      expect(data.id).toBe(id);
      expect(data.name).toBe(name);
    });
  });

  describe('Getting Related Courses Tests', () => {
    let data: Awaited<Promise<CourseCard[]>>;
    beforeAll(async () => {
      data = await getRelatedCourses(classCategory);
    });

    test('Should return an array of CourseCard instances with specified classCategory', () => {
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();

      data.forEach((course) => {
        expect(course).toBeInstanceOf(CourseCard);
        expect(course.classCategory).toBe(classCategory);
      });
    });

    test('Should return at most 3 courses', () => {
      expect(data.length).toBeLessThanOrEqual(3);
    });
  });
});
