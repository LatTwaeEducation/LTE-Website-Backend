import { Asset } from './Asset';
import { ContentfulMetadata, GraphQLCollection, SysGraphQL } from './Common';
import { RichText } from './RichTextFormat';

export interface Blog {
  contentfulMetadata: ContentfulMetadata;
  sys: SysGraphQL;
  title: string;
  thumbnail: Asset;
  body: RichText;
}

export type SingleResponse = {
  blog: Blog;
};

export type CollectionResponse = {
  blogCollection: GraphQLCollection<Blog>;
};
