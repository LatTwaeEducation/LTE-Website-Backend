export interface BaseSys {
    id: string;
}
export interface SysGraphQL extends BaseSys {
    publishedAt: string;
}
export interface SysRestApi extends BaseSys {
    createdAt?: string;
}
interface ContentfulBaseTag {
    name: string;
}
export interface ContentfulGraphQLTag extends ContentfulBaseTag {
    id: string;
}
export interface ContentfulRESTTag extends ContentfulBaseTag {
    sys: BaseSys;
}
interface ContentfulBaseCollectionResponse {
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
export interface GraphQLCollection<T> extends ContentfulBaseCollectionResponse {
    items: T[];
}
export type Tag = {
    id: string;
    name: string;
};
export interface ContentfulMetadata {
    tags: Tag[];
}
export type ContentfulTagResponse = ContentfulRESTArrayResponse<ContentfulRESTTag>;
export interface Query {
    limit?: number;
    skip?: number;
}
type ContentfulPostField<T> = {
    'en-US': T;
};
export interface ContentfulPostEntry<T> {
    fields: {
        [K in keyof T]: ContentfulPostField<T[K]>;
    };
}
export interface ContentfulPostResponse<T> extends ContentfulPostEntry<T> {
    sys: SysRestApi;
    metadata: ContentfulMetadata;
}
export {};
//# sourceMappingURL=Common.d.ts.map