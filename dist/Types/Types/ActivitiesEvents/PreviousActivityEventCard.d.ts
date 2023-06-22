import { IPreviousActivityEventCard } from './IPreviousActivityEventCard';
import { ContentfulPreviousActivityEventCardResponse } from './ContentfulActivityEventResponses';
import { BaseActivityEventCard } from './BaseActivityEventCard';
export declare class PreviousActivityEventCard extends BaseActivityEventCard implements IPreviousActivityEventCard {
    private readonly _replayLink;
    constructor(src: ContentfulPreviousActivityEventCardResponse);
    get replayLink(): string;
}
//# sourceMappingURL=PreviousActivityEventCard.d.ts.map