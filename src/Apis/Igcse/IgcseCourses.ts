import getCourseCards from '../../Services/CourseCards';

const getIgcseCourses = async () => getCourseCards('IGCSE');

export default getIgcseCourses;
