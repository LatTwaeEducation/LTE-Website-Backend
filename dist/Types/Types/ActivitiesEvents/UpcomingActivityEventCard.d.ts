import { ContentfulUpcomingActivityEventCardResponse } from './ContentfulActivityEventResponses';
import { IUpcomingActivityEventCard } from './IUpcomingActivityEventCard';
import { BaseActivityEventCard } from './BaseActivityEventCard';
export declare class UpcomingActivityEventCard extends BaseActivityEventCard implements IUpcomingActivityEventCard {
    private readonly _registrationLink;
    constructor(src: ContentfulUpcomingActivityEventCardResponse);
    get registrationLink(): string;
}
//# sourceMappingURL=UpcomingActivityEventCard.d.ts.map