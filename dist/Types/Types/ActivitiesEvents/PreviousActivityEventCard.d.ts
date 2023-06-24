import { IPreviousActivityEventCard } from './IPreviousActivityEventCard';
import { BaseActivityEventCard } from './BaseActivityEventCard';
import { ContentfulActivityEventCardResponse } from './ContentfulActivityEventResponses';
export declare class PreviousActivityEventCard extends BaseActivityEventCard implements IPreviousActivityEventCard {
    private readonly _replayLink;
    constructor(src: ContentfulActivityEventCardResponse);
    get replayLink(): string;
}
//# sourceMappingURL=PreviousActivityEventCard.d.ts.map