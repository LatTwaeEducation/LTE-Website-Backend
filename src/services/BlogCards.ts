import type { Document } from '@contentful/rich-text-types';
import { format } from 'date-fns';
import { extractFirstParagraph } from './CustomHtmlRenderers';
import { queryData } from './ContentfulServices';
import type { BlogCard, Asset, SysWithTime, BlogsQueryOptions, BlogTag } from '../types';

interface ContentfulMetadataTagsFilter {
  id_contains_some?: string[];
  id_contains_none?: string[];
  id_contains_all?: string[];
}

interface ContentfulMetadataFilter {
  tags_exists?: boolean;
  tags?: ContentfulMetadataTagsFilter;
}

interface BlogFilter {
  contentfulMetadata?: ContentfulMetadataFilter;
}

interface QueryVariable {
  limit?: number;
  filter?: BlogFilter;
}

const generateQueryVariable = (limit: number | undefined = undefined, tags: string[] | undefined = undefined) => {
  const queryVariable: QueryVariable = {};

  if (limit) {
    queryVariable.limit = limit;
  }

  if (tags) {
    queryVariable.filter = {
      contentfulMetadata: {
        tags: {
          id_contains_some: tags,
        },
      },
    };
  }
  return queryVariable;
};

export default async (options: BlogsQueryOptions | undefined = undefined): Promise<BlogCard[]> => {
  type Response = {
    blogCollection: {
      items: {
        contentfulMetadata?: {
          tags: BlogTag[];
        };
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
  query BlogCards($limit: Int, $filter: BlogFilter) {
    blogCollection(limit: $limit, where: $filter) {
      items {
        contentfulMetadata {
          tags {
            id
            name
          }
        }
        sys {
          id
          publishedAt
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

  const { blogCollection } = await queryData<Response>(
    queryString,
    generateQueryVariable(options?.limit, options?.tagIds)
  );

  return blogCollection.items.map((item) => {
    return {
      tags: item.contentfulMetadata?.tags,
      id: item.sys.id,
      thumbnail: item.thumbnail,
      title: item.title,
      createdAt: format(new Date(item.sys.publishedAt), 'dd LLL yyyy'),
      description: extractFirstParagraph(item.body?.json),
    } as BlogCard;
  });
};
