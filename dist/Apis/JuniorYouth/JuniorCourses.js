import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import { CourseCard } from '../../Types/Courses/CourseCard';
import { getCourseGroupTitle } from '../../Services/GetCourseGroupTitle';
const getJuniorCourses = async () => {
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
    const { coursePageSettings, courseCollection } = await queryData(queryString, {
        filter: {
            classCategory: 'Junior',
        },
        coursePageSettingsId: EntryId.CoursesPageSettings,
    });
    return {
        courseCardColor: coursePageSettings.forJuniorCoursesColour.toLowerCase(),
        courseGroupTitle: getCourseGroupTitle(courseCollection),
        courses: courseCollection.items.map(c => new CourseCard(c)),
    };
};
export default getJuniorCourses;
