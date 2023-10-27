import { ICoursesPageTitle } from './ICoursesPageTitle';
import { Asset } from '../CommonTypes';
import { ContentfulJuniorYouthCoursesPageSettings } from './ContentfulCoursesPageSettingsResponse';
export declare class JuniorYouthCoursesPageSettings implements ICoursesPageTitle {
    private readonly _title;
    private readonly _roadmap;
    constructor(src: ContentfulJuniorYouthCoursesPageSettings);
    get title(): string | null;
    get roadmap(): Asset | null;
}
//# sourceMappingURL=JuniorYouthCoursesPageSettings.d.ts.map