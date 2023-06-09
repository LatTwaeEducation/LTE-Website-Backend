import { format } from 'date-fns';
import { extractFirstParagraph } from './CustomHtmlRenderers';
import { queryData } from './ContentfulServices';
import type { BlogCard } from '../Types/Blogs/Blog';
import { ContentfulBlogBase, ContentfulGraphQLCollectionResponse } from '../Types/Blogs/ContentfulBlogResponse';

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

const generateQueryVariable = (limit?: number, tags?: string[]) => {
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

export default async (options?: { limit?: number; tagIds?: string[] }): Promise<BlogCard[]> => {
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

  const { blogCollection } = await queryData<ContentfulGraphQLCollectionResponse<ContentfulBlogBase>>(
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
