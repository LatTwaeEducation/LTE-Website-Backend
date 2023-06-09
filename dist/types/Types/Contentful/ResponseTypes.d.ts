import { ContentfulRESTTag } from './CommonTypes';
export interface ContentfulBaseCollectionResponse {
    total: number;
    skip: number;
    limit: number;
}
export interface ContentfulRESTArrayResponse<T> extends ContentfulBaseCollectionResponse {
    sys: {
        type: 'Array';
    };
    items: T[];
}
export interface ContentfulBaseGraphQLCollectionResponse<T> extends ContentfulBaseCollectionResponse {
    items: T[];
}
export interface ContentfulCourseName {
    name: string;
}
export type ContentfulTagResponse = ContentfulRESTArrayResponse<ContentfulRESTTag>;
//# sourceMappingURL=ResponseTypes.d.ts.map