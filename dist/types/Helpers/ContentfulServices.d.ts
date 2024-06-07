import { ContentfulPostEntry, ContentfulPostResponse } from "../Persistence/Data/Common";
import { ContentTypeId } from "../Persistence/Data/Constraints";
export declare const sendGraphQl: <T>(queryString: string, queryVariables?: object) => Promise<T>;
export declare const postContentfulEntry: <T>(entry: ContentfulPostEntry<T>, contentTypeId: ContentTypeId) => Promise<ContentfulPostResponse<T>>;
//# sourceMappingURL=ContentfulServices.d.ts.map