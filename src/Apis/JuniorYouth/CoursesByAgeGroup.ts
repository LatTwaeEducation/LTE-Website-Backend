import {
  ContentfulCourseCardResponse,
  ContentfulCoursesPageResponse,
} from '../../Types/Courses/ContentfulCourseResponses';
import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import { ContentfulCoursePageSettings, CourseCardGroup } from '../../Types/Courses/CourseCardGroup';
import { CourseCard } from '../../Types/Courses/CourseCard';
import {
  ContentfulForJuniorCoursesColourSetting,
  ContentfulForYouthCoursesColourSetting,
} from '../../Types/CoursesPageSettings/ContentfulCoursesPageSettingsResponse';

const getCourseCardsByAgeGroup = async (): Promise<CourseCardGroup[]> => {
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

  const { courseCollection, coursePageSettings } = await queryData<
    ContentfulCoursesPageResponse<ContentfulCourseCardResponse> &
      ContentfulCoursePageSettings<ContentfulForJuniorCoursesColourSetting & ContentfulForYouthCoursesColourSetting>
  >(queryString, {
    filter: {
      classCategory_in: ['Junior', 'Youth'],
    },
    coursePageSettingsId: EntryId.CoursesPageSettings,
  });

  const uniqueAgeGroups = courseCollection.items
    .map((c) => [c.fromAge, c.toAge])
    .filter(([from, to], i, arr) => arr.findIndex(([f, t]) => from === f && to === t) === i);

  return uniqueAgeGroups.map(([from, to]) => {
    const courses = courseCollection.items
      .filter((c) => c.fromAge === from && c.toAge === to)
      .map((c) => new CourseCard(c));
    const category = courses.at(0)?.classCategory;
    return {
      courseGroupTitle: `Courses For (Age ${from} - ${to})`,
      courseCardColor:
        category === 'Junior' ? coursePageSettings.forJuniorCoursesColour : coursePageSettings.forYouthCoursesColour,
      courses,
    };
  });
};

export default getCourseCardsByAgeGroup;
