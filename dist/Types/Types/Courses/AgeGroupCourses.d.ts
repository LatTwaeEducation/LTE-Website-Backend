import { CourseCard } from './CourseCard';
import { ContentfulForJuniorCoursesColourSetting, ContentfulForYouthCoursesColourSetting } from '../CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
export type AgeGroupCourses = {
    courseAgeGroup: [number, number];
    courseCardColor: string;
    courses: CourseCard[];
};
export type JuniorAndYouthCoursesColorOnly = {
    coursePageSettings: ContentfulForJuniorCoursesColourSetting & ContentfulForYouthCoursesColourSetting;
};
//# sourceMappingURL=AgeGroupCourses.d.ts.map