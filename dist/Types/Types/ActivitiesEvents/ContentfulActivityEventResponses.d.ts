import { BaseSys } from '../Contentful/CommonTypes';
import { Asset } from '../CommonTypes';
import { ContentfulBaseGraphQLCollectionResponse } from '../Contentful/ResponseTypes';
interface ContentfulPreviousActivityEvent {
    replayLink: string | null;
}
interface ContentfulUpcomingActivityEvent {
    registerLink: string | null;
}
export interface ContentfulActivityEventBannerResponse {
    sys: BaseSys;
    thumbnail: Asset | null;
}
export interface ContentfulBaseActivityEventCardResponse extends ContentfulActivityEventBannerResponse {
    name: string;
    eventDateTime: string;
}
export interface ContentfulPreviousActivityEventCardResponse extends ContentfulActivityEventBannerResponse, ContentfulBaseActivityEventCardResponse, ContentfulPreviousActivityEvent {
}
export interface ContentfulUpcomingActivityEventCardResponse extends ContentfulActivityEventBannerResponse, ContentfulBaseActivityEventCardResponse, ContentfulUpcomingActivityEvent {
}
export interface ContentfulActivityEventResponse extends ContentfulBaseActivityEventCardResponse, ContentfulUpcomingActivityEvent, ContentfulPreviousActivityEvent {
    speaker: string;
    topics: string[] | null;
    shareLink: string | null;
    about: string | null;
    eventImages: Asset[] | null;
}
export interface ContentfulGraphQLActivityEventCollectionResponse<T extends ContentfulActivityEventBannerResponse> {
    activityEventCollection: ContentfulBaseGraphQLCollectionResponse<T>;
}
export {};
//# sourceMappingURL=ContentfulActivityEventResponses.d.ts.map