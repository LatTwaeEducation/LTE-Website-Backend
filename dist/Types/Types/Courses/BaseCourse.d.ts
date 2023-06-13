import { ClassCategory } from '../CommonTypes';
import { ContentfulBaseCourseResponse } from './ContentfulCourseResponses';
export declare abstract class BaseCourse {
    protected readonly _id: string;
    protected readonly _name: string;
    protected readonly _fromAge: number;
    protected readonly _toAge: number;
    protected readonly _duration: number;
    protected readonly _hoursPerWeek: number;
    protected readonly _students: number;
    protected readonly _classCategory: ClassCategory;
    constructor(src: ContentfulBaseCourseResponse);
    get id(): string;
    get name(): string;
    get age(): string;
    get duration(): string;
    get students(): number;
    get classCategory(): ClassCategory;
    private weekHumaniser;
    private hourHumaniser;
    private generateDurationString;
}
//# sourceMappingURL=BaseCourse.d.ts.map