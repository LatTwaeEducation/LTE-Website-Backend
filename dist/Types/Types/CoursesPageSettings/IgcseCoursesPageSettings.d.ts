import { ICoursesPageTitle } from './ICoursesPageTitle';
import { ContentfulIgcseCoursesPageSetting } from './ContentfulCoursesPageSettingsResponse';
export declare class IgcseCoursesPageSettings implements ICoursesPageTitle {
    private readonly _title;
    private readonly _body;
    constructor(src: ContentfulIgcseCoursesPageSetting);
    get title(): string | null;
    get body(): string | null;
}
//# sourceMappingURL=IgcseCoursesPageSettings.d.ts.map