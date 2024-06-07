import { sendGraphQl } from '@helpers/ContentfulServices';

import { GraphQLCollection } from './Data/Common';
import { CourseCategory } from './Data/Constraints';
import { CollectionResponse, Course, CourseQuery, SingleResponse } from './Data/Course';

export const getCourseNamesByCategory = async (courseCategory: CourseCategory): Promise<string[]> => {
  const query = `
  query ($courseCategory: String!) {
    courseCollection(where: { classCategory: $courseCategory }) {
      items {
        name
      }
    }
  }`;

  const queryVariable = {
    courseCategory,
  };

  const response = await sendGraphQl<CollectionResponse>(query, queryVariable);
  return response.courseCollection.items.map((c) => c.name);
};

export const getCoursesByCategory = async (queryVariables: CourseQuery): Promise<Course[]> => {
  const query = `
  query ($courseCategory: String!, $limit: Int, $skip: Int) {
    courseCollection(where: { classCategory: $courseCategory }, limit: $limit, skip: $skip) {
      items {
        sys {
          id
        }
        thumbnail {
          url
          title
        }
        featuredImage {
          url
          title
        }
        name
        classCategory
        fromAge
        toAge
        duration
        hoursPerWeek
        students
        learningPlatforms
        price
        requirements
        languages
        classDescription
        skillsYouWillGain
        whatWillYouLearn
        courseDescription
        continuousLearning
      }
    }
  }`;

  const { courseCollection } = await sendGraphQl<CollectionResponse>(query, queryVariables);
  return courseCollection.items;
};

export const getCourseById = async (courseId: string): Promise<Course> => {
  const query = `
  query ($courseId: String!) {
    course(id: $courseId) {
      sys {
        id
      }
      featuredImage {
        url
        title
      }
      name
      classCategory
      fromAge
      toAge
      duration
      students
      learningPlatforms
      price
      requirements
      languages
      classDescription
      skillsYouWillGain
      whatWillYouLearn
      courseDescription
      continuousLearning
    }
  }`;

  const queryVariables = {
    courseId,
  };

  const { course } = await sendGraphQl<SingleResponse>(query, queryVariables);
  return course;
};

export const getStudentsFromCourses = async (): Promise<GraphQLCollection<Course>> => {
  const query = `
  query {
    courseCollection {
      items {
        sys {
          id
        }
        name
        students
      }
    }
  }`;

  const { courseCollection } = await sendGraphQl<CollectionResponse>(query);
  return courseCollection;
};
