import getCourseCards from '../../Services/CourseCards';

const getEveryoneCourses = async () => getCourseCards('Everyone');

export default getEveryoneCourses;
