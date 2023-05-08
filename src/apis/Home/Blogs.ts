import type { Document } from '@contentful/rich-text-types';
import { extractFirstParagraph } from '../../services/CustomHtmlRenderers';
import queryData from '../../services/graphql';
import type { BlogCard, Asset, SysWithTime } from '../../types';

export default async () => {
  type Response = {
    blogCollection: {
      items: {
        sys: SysWithTime;
        title: string;
        thumbnail: Asset;
        body?: {
          json: Document;
        };
      }[];
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
      publishedAt: new Date(item.sys.publishedAt),
      description: extractFirstParagraph(item.body?.json),
    } as BlogCard;
  });
};
