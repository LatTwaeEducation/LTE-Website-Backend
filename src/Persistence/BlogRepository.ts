import { sendGraphQl } from '@helpers/ContentfulServices';
import { distinct } from '@helpers/Utilities';

import { Blog, CollectionResponse, SingleResponse } from './Data/Blog';
import { Query, Tag } from './Data/Common';

export const getBlogById = async (blogId: string): Promise<Blog> => {
  const query = `
  query ($blogId: String!) {
    blog(id: $blogId) {
      sys {
        id
        publishedAt
      }
      slug
      title
      thumbnail {
        title
        url
      }
      body {
        json
        links {
          assets {
            hyperlink {
              url
              title
            }
          }
        }
      }
    }
  }`;

  const queryVariables = {
    blogId,
  };

  const { blog } = await sendGraphQl<SingleResponse>(query, queryVariables);
  return blog;
};

export const getBlogs = async (queryVariables?: Query): Promise<Blog[]> => {
  const query = `
  query ($skip: Int, $limit: Int) {
    blogCollection(skip: $skip, limit: $limit) {
      items {
        sys {
          id
          publishedAt
        }
        contentfulMetadata {
          tags {
            id
            name
          }
        }
        title
        thumbnail {
          url
          title
        }
        body {
          json
        }
      }
    }
  }`;

  const { blogCollection } = await sendGraphQl<CollectionResponse>(query, queryVariables);
  return blogCollection.items;
};

export const getBlogTags = async (): Promise<Tag[]> => {
  const query = `
  query {
    blogCollection {
      items {
        contentfulMetadata {
          tags {
            id
            name
          }
        }
      }
    }
  }`;

  const { blogCollection } = await sendGraphQl<CollectionResponse>(query);
  const tags = blogCollection.items.flatMap((b) => b.contentfulMetadata.tags);
  const uniqueTags = distinct(tags, (t) => t.id);

  return uniqueTags;
};
