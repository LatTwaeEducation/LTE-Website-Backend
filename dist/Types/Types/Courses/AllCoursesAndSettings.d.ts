import { ContentfulAllCategoriesCoursesNamesResponse } from './ContentfulCourseResponses';
import { IJuniorCoursesColourSetting } from '../CoursesPageSettings/IJuniorCoursesColourSetting';
import { IYouthCoursesColourSetting } from '../CoursesPageSettings/IYouthCoursesColourSetting';
import { IEveryoneCoursesColourSetting } from '../CoursesPageSettings/IEveryoneCoursesColourSetting';
import { IIgcseCoursesColourSetting } from '../CoursesPageSettings/IIgcseCoursesColourSetting';
import { ContentfulAllCoursesColourSettings } from '../CoursesPageSettings/ContentfulCoursesPageSettingsResponse';
export declare class AllCoursesAndSettings implements IJuniorCoursesColourSetting, IYouthCoursesColourSetting, IEveryoneCoursesColourSetting, IIgcseCoursesColourSetting {
    private readonly _igcseCourses;
    private readonly _everyoneCourses;
    private readonly _juniorCourses;
    private readonly _youthCourses;
    private readonly _igcseColour;
    private readonly _everyoneColour;
    private readonly _juniorColour;
    private readonly _youthColour;
    constructor(coursesAndSettings: ContentfulAllCategoriesCoursesNamesResponse & ContentfulAllCoursesColourSettings);
    get juniorCourses(): string[];
    get youthCourses(): string[];
    get everyoneCourses(): string[];
    get igcseCourses(): string[];
    get everyoneCoursesColour(): string;
    get igcseCoursesColour(): string;
    get juniorCoursesColour(): string;
    get youthCoursesColour(): string;
}
//# sourceMappingURL=AllCoursesAndSettings.d.ts.map