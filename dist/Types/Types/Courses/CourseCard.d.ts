import { Asset } from '../CommonTypes';
import { ContentfulCourseCardResponse } from './ContentfulCourseResponses';
import { BaseCourse } from './BaseCourse';
export declare class CourseCard extends BaseCourse {
    private readonly _thumbnail;
    constructor(src: ContentfulCourseCardResponse);
    get thumbnail(): Asset | null;
}
//# sourceMappingURL=CourseCard.d.ts.map