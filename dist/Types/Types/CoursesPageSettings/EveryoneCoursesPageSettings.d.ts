import { IEveryoneCoursesColourSetting } from './IEveryoneCoursesColourSetting';
import { ICoursesPageTitle } from './ICoursesPageTitle';
import { ContentfulEveryoneCoursesPageSetting } from './ContentfulCoursesPageSettingsResponse';
export declare class EveryoneCoursesPageSettings implements IEveryoneCoursesColourSetting, ICoursesPageTitle {
    private readonly _colour;
    private readonly _title;
    constructor(src: ContentfulEveryoneCoursesPageSetting);
    get everyoneCoursesColour(): string;
    get title(): string | null;
}
//# sourceMappingURL=EveryoneCoursesPageSettings.d.ts.map