import { IJuniorCoursesColourSetting } from './IJuniorCoursesColourSetting';
import { IYouthCoursesColourSetting } from './IYouthCoursesColourSetting';
import { IEveryoneCoursesColourSetting } from './IEveryoneCoursesColourSetting';
import { IIgcseCoursesColourSetting } from './IIgcseCoursesColourSetting';
import { ContentfulAllCoursesColourSettings } from './ContentfulCoursesPageSettingsResponse';
export declare class AllCoursesColourSettings implements IJuniorCoursesColourSetting, IYouthCoursesColourSetting, IEveryoneCoursesColourSetting, IIgcseCoursesColourSetting {
    private readonly _juniorColour;
    private readonly _youthColour;
    private readonly _everyoneColour;
    private readonly _igcseColour;
    constructor(src: ContentfulAllCoursesColourSettings);
    get igcseCoursesColour(): string;
    get juniorCoursesColour(): string;
    get youthCoursesColour(): string;
    get everyoneCoursesColour(): string;
}
//# sourceMappingURL=AllCoursesColourSettings.d.ts.map