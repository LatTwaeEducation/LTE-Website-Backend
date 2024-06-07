import { GraphQLCollection } from './Data/Common';
import { CourseCategory } from './Data/Constraints';
import { Course, CourseQuery } from './Data/Course';
export declare const getCourseNamesByCategory: (courseCategory: CourseCategory) => Promise<string[]>;
export declare const getCoursesByCategory: (queryVariables: CourseQuery) => Promise<Course[]>;
export declare const getCourseById: (courseId: string) => Promise<Course>;
export declare const getStudentsFromCourses: () => Promise<GraphQLCollection<Course>>;
//# sourceMappingURL=CourseRepository.d.ts.map