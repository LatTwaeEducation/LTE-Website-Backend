import { sendGraphQl } from "../Helpers/ContentfulServices";
export const getCourseNamesByCategory = async (courseCategory) => {
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
    const response = await sendGraphQl(query, queryVariable);
    return response.courseCollection.items.map((c) => c.name);
};
export const getCoursesByCategory = async (queryVariables) => {
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
    const { courseCollection } = await sendGraphQl(query, queryVariables);
    return courseCollection.items;
};
export const getCourseById = async (courseId) => {
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
    const { course } = await sendGraphQl(query, queryVariables);
    return course;
};
export const getStudentsFromCourses = async () => {
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
    const { courseCollection } = await sendGraphQl(query);
    return courseCollection;
};
