import { Course as DbObjectCourseDetail } from "../Persistence/Data/Course";
import { CourseCard, CourseDetail as DomainCourseDetail } from "../Domain/Course";
export declare const mapCourseDetail: (src: DbObjectCourseDetail) => DomainCourseDetail;
export declare const mapCourseCard: (src: DbObjectCourseDetail) => CourseCard;
//# sourceMappingURL=CourseMapper.d.ts.map