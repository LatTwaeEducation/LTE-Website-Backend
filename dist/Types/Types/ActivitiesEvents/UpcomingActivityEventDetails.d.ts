import { BaseActivityEventDetails } from './BaseActivityEventDetails';
import { IUpcomingActivityEventDetails } from './IUpcomingActivityEventDetails';
import { ContentfulActivityEventResponse } from './ContentfulActivityEventResponses';
export declare class UpcomingActivityEventDetails extends BaseActivityEventDetails implements IUpcomingActivityEventDetails {
    private readonly _registerLink;
    constructor(src: ContentfulActivityEventResponse);
    get registerLink(): string;
    get time(): string;
}
//# sourceMappingURL=UpcomingActivityEventDetails.d.ts.map