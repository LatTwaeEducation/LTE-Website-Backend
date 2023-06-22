import { Asset } from '../CommonTypes';
import { ContentfulActivityEventBannerResponse } from './ContentfulActivityEventResponses';
import { IActivityEventBanner } from './IActivityEventBanner';
export declare class ActivityEventBanner implements IActivityEventBanner {
    private readonly _thumbnail;
    private readonly _id;
    constructor(src: ContentfulActivityEventBannerResponse);
    get id(): string;
    get thumbnail(): Asset | null;
}
//# sourceMappingURL=ActivityEventBanner.d.ts.map