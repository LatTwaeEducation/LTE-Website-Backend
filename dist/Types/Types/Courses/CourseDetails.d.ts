import { BaseCourse } from './BaseCourse';
import { ContentfulCourseDetailsResponse } from './ContentfulCourseResponses';
import { Asset } from '../CommonTypes';
export declare class CourseDetails extends BaseCourse {
    private readonly _featuredImage;
    private readonly _learningPlatforms;
    private readonly _price;
    private readonly _requirements;
    private readonly _languages;
    private readonly _classDescription;
    private readonly _skillsYouWillGain;
    private readonly _whatWillYouLearn;
    private readonly _courseDescription;
    private readonly _continuousLearning;
    constructor(src: ContentfulCourseDetailsResponse);
    get featuredImage(): Asset | null;
    get learningPlatforms(): string;
    get price(): number;
    get requirements(): string;
    get languages(): string;
    get classDescription(): string;
    get skillsYouWillGain(): string[];
    get whatWillYouLearn(): string[];
    get courseDescription(): string[];
    get continuousLearning(): string[];
}
//# sourceMappingURL=CourseDetails.d.ts.map