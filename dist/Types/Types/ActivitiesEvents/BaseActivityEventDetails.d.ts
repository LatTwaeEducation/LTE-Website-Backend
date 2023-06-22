import { IActivityEventDetails } from './IActivityEventDetails';
import { BaseActivityEventCard } from './BaseActivityEventCard';
import { ContentfulActivityEventResponse } from './ContentfulActivityEventResponses';
export declare abstract class BaseActivityEventDetails extends BaseActivityEventCard implements IActivityEventDetails {
    private readonly _speaker;
    private readonly _about;
    private readonly _topics;
    protected constructor(src: ContentfulActivityEventResponse);
    get about(): string;
    get speaker(): string;
    get topics(): string[];
}
//# sourceMappingURL=BaseActivityEventDetails.d.ts.map