import { ContentfulCoursePageSettings, CourseCardGroup } from '../../Types/Courses/CourseCardGroup';
import {
  ContentfulCourseCardResponse,
  ContentfulCoursesPageResponse,
} from '../../Types/Courses/ContentfulCourseResponses';
import { queryData } from '../../Services/ContentfulServices';
import { ContentfulForJuniorCoursesColourSetting } from '../../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
import { EntryId } from '../../Types/CommonTypes';
import { CourseCard } from '../../Types/Courses/CourseCard';
import { getCourseGroupTitle } from '../../Services/GetCourseGroupTitle';

const getJuniorCourses = async (): Promise<CourseCardGroup> => {
  const queryString = `
  query($filter: CourseFilter, $coursePageSettingsId: String!) {
    coursePageSettings(id: $coursePageSettingsId) {
      forJuniorCoursesColour
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

  const { coursePageSettings, courseCollection } = await queryData<
    ContentfulCoursesPageResponse<ContentfulCourseCardResponse> &
      ContentfulCoursePageSettings<ContentfulForJuniorCoursesColourSetting>
  >(queryString, {
    filter: {
      classCategory: 'Junior',
    },
    coursePageSettingsId: EntryId.CoursesPageSettings,
  });

  return {
    courseCardColor: coursePageSettings.forJuniorCoursesColour,
    courseGroupTitle: getCourseGroupTitle(courseCollection),
    courses: courseCollection.items.map((c) => new CourseCard(c)),
  };
};
export default getJuniorCourses;
