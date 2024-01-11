import { Document } from '@contentful/rich-text-types';
import { ContentfulBaseGraphQLCollectionResponse } from '../Contentful/ResponseTypes';
import { ContentfulAsset, ContentfulGraphQLTag, SysGraphQL } from '../Contentful/CommonTypes';

export interface ContentfulBlogBase {
  contentfulMetadata?: {
    tags: ContentfulGraphQLTag;
  };
  sys: SysGraphQL;
  title: string;
  thumbnail: ContentfulAsset;
  body?: {
    json: Document;
  };
}

export interface ContentfulGraphQLBlogCollectionResponse<T extends ContentfulBlogBase> {
  blogCollection: ContentfulBaseGraphQLCollectionResponse<T>;
}
