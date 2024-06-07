import { CourseCategory } from "../Persistence/Data/Constraints";
import { Course } from "../Persistence/Data/Course";
export declare const getDurationString: (duration: number, hoursPerWeek: number) => string;
export declare const formatDateTimeWithTimezone: (src: Date | string, dateTimePattern?: string) => string;
export declare const formatDateString: (src: Date | string, datePattern?: string) => string;
export declare const getCourseGroupTitle: (courseCategory: CourseCategory, courses: Course[]) => string;
//# sourceMappingURL=Humaniser.d.ts.map