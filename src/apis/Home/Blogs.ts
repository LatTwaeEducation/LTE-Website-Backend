import type { Document } from '@contentful/rich-text-types';
import { extractFirstParagraph } from 'src/services/CustomHtmlRenderers';
import queryData from 'src/services/graphql';
import type { BlogCard, Asset, Sys } from 'src/types';

export async function getBlogs() {
  type Item = {
    sys: Sys;
    title: string;
    thumbnail: Asset;
    body?: {
      json: Document;
    };
  };

  type Response = {
    blogCollection: {
      items: Item[];
    };
  };

  const queryString = `
  query Blogs_Home {
    blogCollection(limit: 3) {
      items {
        sys {
          id
          publishedAt
        }
        title
        thumbnail {
          title
          url
        }
        body {
          json
        }
      }
    }
  }
  
  `;

  const { blogCollection } = await queryData<Response>(queryString);

  return blogCollection.items.map((item) => {
    return {
      id: item.sys.id,
      thumbnail: item.thumbnail,
      title: item.title,
      publishedAt: item.sys.publishAt,
      description: extractFirstParagraph(item.body?.json),
    } as BlogCard;
  });
}
