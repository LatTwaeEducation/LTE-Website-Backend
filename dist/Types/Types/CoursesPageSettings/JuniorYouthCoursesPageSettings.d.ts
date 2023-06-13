import { IJuniorCoursesColourSetting } from './IJuniorCoursesColourSetting';
import { IYouthCoursesColourSetting } from './IYouthCoursesColourSetting';
import { ICoursesPageTitle } from './ICoursesPageTitle';
import { Asset } from '../CommonTypes';
import { ContentfulJuniorYouthCoursesPageSettings } from './ContentfulCoursesPageSettingsResponse';
export declare class JuniorYouthCoursesPageSettings implements IJuniorCoursesColourSetting, IYouthCoursesColourSetting, ICoursesPageTitle {
    private readonly _juniorColour;
    private readonly _youthColour;
    private readonly _title;
    private readonly _roadmap;
    constructor(src: ContentfulJuniorYouthCoursesPageSettings);
    get juniorCoursesColour(): string;
    get youthCoursesColour(): string;
    get title(): string | null;
    get roadmap(): Asset | null;
}
//# sourceMappingURL=JuniorYouthCoursesPageSettings.d.ts.map