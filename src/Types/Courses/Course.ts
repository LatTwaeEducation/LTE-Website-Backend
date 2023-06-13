import { CourseCard } from './CourseCard';

export interface BaseSettings {
  colour: string;
  title: string | null;
}

export interface FullSettings extends BaseSettings {
  body: string | null;
}

export type ForJuniorCoursesPageSettings = BaseSettings;
export type ForYouthCoursesPageSettings = BaseSettings;
export type ForEveryoneCoursesPageSettings = BaseSettings;
export type ForIgcseCoursesPageSettings = FullSettings;

export interface CoursesNamesOnly {
  juniorCourses: string[];
  youthCourses: string[];
  everyoneCourses: string[];
  igcseCourses: string[];
}

export interface CoursesPage<TSettings extends BaseSettings> {
  coursesPageSettings: TSettings;
  courses: CourseCard[];
}
