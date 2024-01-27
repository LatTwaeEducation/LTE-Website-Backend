import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import { CourseCard } from '../../Types/Courses/CourseCard';
import { getCourseGroupTitle } from '../../Services/GetCourseGroupTitle';
const getYouthCourses = async () => {
    const queryString = `
  query($filter: CourseFilter, $coursePageSettingsId: String!) {
    coursePageSettings(id: $coursePageSettingsId) {
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
    const { coursePageSettings, courseCollection } = await queryData(queryString, {
        filter: {
            classCategory: 'Youth',
        },
        coursePageSettingsId: EntryId.CoursesPageSettings,
    });
    return {
        courseCardColor: coursePageSettings.forYouthCoursesColour.toLowerCase(),
        courseGroupTitle: getCourseGroupTitle(courseCollection),
        courses: courseCollection.items.map(c => new CourseCard(c)),
    };
};
export default getYouthCourses;
