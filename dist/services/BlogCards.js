var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { format } from 'date-fns';
import { extractFirstParagraph } from './CustomHtmlRenderers';
import { queryData } from './ContentfulServices';
const generateQueryVariable = (limit = undefined, tags = undefined) => {
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
export default (options = undefined) => __awaiter(void 0, void 0, void 0, function* () {
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
    const { blogCollection } = yield queryData(queryString, generateQueryVariable(options === null || options === void 0 ? void 0 : options.limit, options === null || options === void 0 ? void 0 : options.tagIds));
    return blogCollection.items.map((item) => {
        var _a, _b;
        return {
            tags: (_a = item.contentfulMetadata) === null || _a === void 0 ? void 0 : _a.tags,
            id: item.sys.id,
            thumbnail: item.thumbnail,
            title: item.title,
            createdAt: format(new Date(item.sys.publishedAt), 'dd LLL yyyy'),
            description: extractFirstParagraph((_b = item.body) === null || _b === void 0 ? void 0 : _b.json),
        };
    });
});
