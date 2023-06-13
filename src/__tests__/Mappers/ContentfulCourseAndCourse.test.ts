import { expect } from '@jest/globals';
import {
  ContentfulCourseCardResponse,
  ContentfulCoursesPageResponse,
} from '../../Types/Courses/ContentfulCourseResponses';
import { convertToCourseCards } from '../../Mappers/ContentfulCourseAndCourse';
import { CourseCard } from '../../Types/Courses/CourseCard';

describe('Contentful Course and Course Mappers Tests', () => {
  describe('From Contentful Course Cards Response to Course Cards', () => {
    test('Should return an array of CourseCard instances.', () => {
      const inputData: ContentfulCoursesPageResponse<ContentfulCourseCardResponse> = {
        courseCollection: {
          items: [
            {
              sys: {
                id: '4XmhhH3gM1a6pQlQaehDzr',
              },
              thumbnail: null,
              name: 'Creative Coding and Technology (CCT Junior)',
              classCategory: 'Junior',
              fromAge: 5,
              toAge: 7,
              duration: 48,
              hoursPerWeek: 3,
              students: 0,
            },
            {
              sys: {
                id: '2RVeF2ZqcPqJPEb5QJkjP4',
              },
              thumbnail: null,
              name: 'Cambridge/Pearson Edexcel IGCSE (ICT)',
              classCategory: 'IGCSE',
              fromAge: 1,
              toAge: 5,
              duration: 0,
              hoursPerWeek: 3,
              students: 0,
            },
          ],
        },
      };

      const outputData = convertToCourseCards(inputData);
      outputData.forEach((element) => {
        expect(element).toBeInstanceOf(CourseCard);
      });
    });
  });
});
