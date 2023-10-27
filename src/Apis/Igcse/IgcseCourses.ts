import { ContentfulCoursePageSettings, CourseCardGroup } from '../../Types/Courses/CourseCardGroup';
import {
  ContentfulCourseCardResponse,
  ContentfulCoursesPageResponse,
} from '../../Types/Courses/ContentfulCourseResponses';
import { queryData } from '../../Services/ContentfulServices';
import { ContentfulForIgcseCoursesColourSetting } from '../../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
import { EntryId } from '../../Types/CommonTypes';
import { CourseCard } from '../../Types/Courses/CourseCard';
import { getCourseGroupTitle } from '../../Services/GetCourseGroupTitle';

const getJuniorCourses = async (): Promise<CourseCardGroup> => {
  const queryString = `
  query($filter: CourseFilter, $coursePageSettingsId: String!) {
    coursePageSettings(id: $coursePageSettingsId) {
      forIgcseCoursesColour 
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
      ContentfulCoursePageSettings<ContentfulForIgcseCoursesColourSetting>
  >(queryString, {
    filter: {
      classCategory: 'Igcse',
    },
    coursePageSettingsId: EntryId.CoursesPageSettings,
  });

  return {
    courseCardColor: coursePageSettings.forIgcseCoursesColour,
    courseGroupTitle: getCourseGroupTitle(courseCollection),
    courses: courseCollection.items.map((c) => new CourseCard(c)),
  };
};
export default getJuniorCourses;
