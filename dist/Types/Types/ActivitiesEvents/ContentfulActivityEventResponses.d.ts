import { BaseSys } from '../Contentful/CommonTypes';
import { Asset } from '../CommonTypes';
import { ContentfulBaseGraphQLCollectionResponse } from '../Contentful/ResponseTypes';
export interface ContentfulActivityEventBannerResponse {
    sys: BaseSys;
    thumbnail: Asset | null;
}
export interface ContentfulActivityEventCardResponse extends ContentfulActivityEventBannerResponse {
    name: string;
    eventDateTime: string;
    replayLink: string | null;
    registrationLink: string | null;
}
export interface ContentfulActivityEventResponse extends ContentfulActivityEventCardResponse {
    speaker: string;
    topics: string[] | null;
    shareLink: string | null;
    about: string | null;
    eventImagesCollection: ContentfulBaseGraphQLCollectionResponse<Asset>;
}
export interface ContentfulGraphQLActivityEventCollectionResponse<T extends ContentfulActivityEventBannerResponse> {
    activityEventCollection: ContentfulBaseGraphQLCollectionResponse<T>;
}
export interface ContentfulGraphQLActivityEventEntryResponse<T extends ContentfulActivityEventBannerResponse> {
    activityEvent: T;
}
//# sourceMappingURL=ContentfulActivityEventResponses.d.ts.map