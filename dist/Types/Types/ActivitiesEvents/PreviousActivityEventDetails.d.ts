import { BaseActivityEventDetails } from './BaseActivityEventDetails';
import { IPreviousActivityEventDetails } from './IPreviousActivityEventDetails';
import { ContentfulActivityEventResponse } from './ContentfulActivityEventResponses';
import { Asset } from '../CommonTypes';
export declare class PreviousActivityEventDetails extends BaseActivityEventDetails implements IPreviousActivityEventDetails {
    private readonly _eventImages;
    private readonly _replayLink;
    private readonly _shareLink;
    constructor(src: ContentfulActivityEventResponse);
    get eventImages(): Asset[];
    get replayLink(): string;
    get shareLink(): string;
}
//# sourceMappingURL=PreviousActivityEventDetails.d.ts.map