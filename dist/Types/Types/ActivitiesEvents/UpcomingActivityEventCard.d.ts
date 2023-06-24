import { IUpcomingActivityEventCard } from './IUpcomingActivityEventCard';
import { BaseActivityEventCard } from './BaseActivityEventCard';
import { ContentfulActivityEventCardResponse } from './ContentfulActivityEventResponses';
export declare class UpcomingActivityEventCard extends BaseActivityEventCard implements IUpcomingActivityEventCard {
    private readonly _registrationLink;
    constructor(src: ContentfulActivityEventCardResponse);
    get registrationLink(): string;
}
//# sourceMappingURL=UpcomingActivityEventCard.d.ts.map