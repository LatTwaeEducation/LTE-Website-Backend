import { format } from 'date-fns';
import { extractFirstParagraph } from './CustomHtmlRenderers';
import { queryData } from './ContentfulServices';
import { DatePattern } from '../Types/CommonTypes';
const generateQueryVariable = (limit, tags) => {
    const queryVariable = {};
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
export default async (options) => {
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
    const { blogCollection } = await queryData(queryString, generateQueryVariable(options?.limit, options?.tagIds));
    return blogCollection.items.map(item => {
        return {
            tags: item.contentfulMetadata?.tags,
            id: item.sys.id,
            thumbnail: item.thumbnail.url,
            title: item.title,
            createdAt: format(new Date(item.sys.publishedAt), DatePattern),
            description: extractFirstParagraph(item.body?.json),
        };
    });
};
