import { ICoursesPageTitle } from './ICoursesPageTitle';
import { ContentfulEveryoneCoursesPageSetting } from './ContentfulCoursesPageSettingsResponse';
export declare class EveryoneCoursesPageSettings implements ICoursesPageTitle {
    private readonly _title;
    private readonly _body;
    constructor(src: ContentfulEveryoneCoursesPageSetting);
    get title(): string | null;
    get body(): string | null;
}
//# sourceMappingURL=EveryoneCoursesPageSettings.d.ts.map