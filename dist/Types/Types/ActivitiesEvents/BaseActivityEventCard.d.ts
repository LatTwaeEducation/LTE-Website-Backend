import { ActivityEventBanner } from './ActivityEventBanner';
import { IActivityEventCard } from './IActivityEventCard';
import { ContentfulActivityEventCardResponse } from './ContentfulActivityEventResponses';
export declare abstract class BaseActivityEventCard extends ActivityEventBanner implements IActivityEventCard {
    protected readonly _eventDateTime: Date;
    private readonly _name;
    protected readonly _timezone: string;
    protected constructor(src: ContentfulActivityEventCardResponse);
    get date(): string;
    get name(): string;
}
//# sourceMappingURL=BaseActivityEventCard.d.ts.map