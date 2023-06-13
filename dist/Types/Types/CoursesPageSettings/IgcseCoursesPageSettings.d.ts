import { IIgcseCoursesColourSetting } from './IIgcseCoursesColourSetting';
import { ICoursesPageTitle } from './ICoursesPageTitle';
import { ContentfulIgcseCoursesPageSetting } from './ContentfulCoursesPageSettingsResponse';
export declare class IgcseCoursesPageSettings implements IIgcseCoursesColourSetting, ICoursesPageTitle {
    private readonly _colour;
    private readonly _title;
    private readonly _body;
    constructor(src: ContentfulIgcseCoursesPageSetting);
    get igcseCoursesColour(): string;
    get title(): string | null;
    get body(): string | null;
}
//# sourceMappingURL=IgcseCoursesPageSettings.d.ts.map