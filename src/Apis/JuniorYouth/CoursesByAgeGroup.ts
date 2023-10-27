import {
  ContentfulCourseCardResponse,
  ContentfulCoursesPageResponse,
} from '../../Types/Courses/ContentfulCourseResponses';
import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import { AgeGroupCourses, JuniorAndYouthCoursesColorOnly } from '../../Types/Courses/AgeGroupCourses';
import { CourseCard } from '../../Types/Courses/CourseCard';

const getCourseCardsByAgeGroup = async (): Promise<AgeGroupCourses[]> => {
  const queryString = `
    query($filter: CourseFilter, $coursePageSettingsId: String!) {
    coursePageSettings(id: $coursePageSettingsId) {
      forJuniorCoursesColour
      forYouthCoursesColour
    }
    courseCollection(where: $filter) {
      items {
        sys {
          id
        }
        thumbnail {
          url
          title
        }
        name
        duration
        hoursPerWeek
        fromAge
        toAge
        students
        classCategory
      }
    }
  }`;

  const response = await queryData<
    ContentfulCoursesPageResponse<ContentfulCourseCardResponse> & JuniorAndYouthCoursesColorOnly
  >(queryString, {
    filter: {
      classCategory_in: ['Junior', 'Youth'],
    },
    coursePageSettingsId: EntryId.CoursesPageSettings,
  });

  const result: AgeGroupCourses[] = [];

  response.courseCollection.items.forEach((c) => {
    const groupIndex = result.findIndex((r) => r.courseAgeGroup[0] === c.fromAge && r.courseAgeGroup[1] === c.toAge);
    if (groupIndex !== -1) {
      result[groupIndex].courses.push(new CourseCard(c));
    } else {
      const newGroup: AgeGroupCourses = {
        courseAgeGroup: [c.fromAge, c.toAge],
        courseCardColor:
          c.classCategory === 'Junior'
            ? response.coursePageSettings.forJuniorCoursesColour
            : response.coursePageSettings.forYouthCoursesColour,
        courses: [new CourseCard(c)],
      };
      result.push(newGroup);
    }
  });
  return result;
};

export default getCourseCardsByAgeGroup;
