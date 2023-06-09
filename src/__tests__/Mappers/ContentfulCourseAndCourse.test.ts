import { type CourseCard } from '../../Types/CommonTypes';
import { ContentfulCourseCardResponse } from '../../Types/Courses/ContentfulCourseResponse';
import { convertToCourseCard } from '../../Mappers/ContentfulCourseAndCourse';

describe('Contentful Course and Course Mappers Tests', () => {
  describe('From Contentful Course Card to Course Card', () => {
    test('Should return an CourseCard object.', () => {
      const inputData: ContentfulCourseCardResponse = {
        sys: {
          id: '2RVeF2ZqcPqJPEb5QJkjP4',
        },
        thumbnail: null,
        name: 'Cambridge/Pearson Edexcel IGCSE (ICT)',
        duration: 0,
        students: 0,
        classCategory: 'IGCSE',
      };

      const outputObject: CourseCard = {
        id: inputData.sys.id,
        name: inputData.name,
        thumbnail: inputData.thumbnail,
        students: inputData.students,
        classCategory: inputData.classCategory,
        duration: inputData.duration,
      };

      expect(convertToCourseCard(inputData)).toEqual(outputObject);
    });
  });
});
