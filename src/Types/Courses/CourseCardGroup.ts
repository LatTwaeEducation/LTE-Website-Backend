import { CourseCard } from './CourseCard';

export type CourseCardGroup = {
  courseGroupTitle: string;
  courseCardColor: string;
  courses: CourseCard[];
};

export type ContentfulCoursePageSettings<TCoursesColor> = {
  coursePageSettings: TCoursesColor;
};
