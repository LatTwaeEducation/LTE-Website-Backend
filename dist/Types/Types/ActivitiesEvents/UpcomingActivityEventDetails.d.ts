import { BaseActivityEventDetails } from './BaseActivityEventDetails';
import { IUpcomingActivityEventDetails } from './IUpcomingActivityEventDetails';
import { ContentfulActivityEventResponse } from './ContentfulActivityEventResponses';
export declare class UpcomingActivityEventDetails extends BaseActivityEventDetails implements IUpcomingActivityEventDetails {
    private readonly _registrationLink;
    constructor(src: ContentfulActivityEventResponse);
    get registrationLink(): string;
    get time(): string;
}
//# sourceMappingURL=UpcomingActivityEventDetails.d.ts.map