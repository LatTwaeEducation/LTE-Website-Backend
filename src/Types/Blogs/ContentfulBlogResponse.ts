import { Document } from '@contentful/rich-text-types';
import { ContentfulBaseGraphQLCollectionResponse } from '../Contentful/ResponseTypes';
import { ContentfulGraphQLTag, SysGraphQL } from '../Contentful/CommonTypes';
import { Asset } from '../CommonTypes';

export interface ContentfulBlogBase {
  contentfulMetadata?: {
    tags: ContentfulGraphQLTag;
  };
  sys: SysGraphQL;
  title: string;
  thumbnail: Asset;
  body?: {
    json: Document;
  };
}

export interface ContentfulGraphQLBlogCollectionResponse<T extends ContentfulBlogBase> {
  blogCollection: ContentfulBaseGraphQLCollectionResponse<T>;
}
