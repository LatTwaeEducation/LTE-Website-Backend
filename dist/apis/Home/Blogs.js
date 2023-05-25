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
import { extractFirstParagraph } from '../../services/CustomHtmlRenderers';
import queryData from '../../services/graphql';
export default () => __awaiter(void 0, void 0, void 0, function* () {
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
    const { blogCollection } = yield queryData(queryString);
    return blogCollection.items.map((item) => {
        var _a;
        return {
            id: item.sys.id,
            thumbnail: item.thumbnail,
            title: item.title,
            createdAt: format(new Date(item.sys.publishedAt), 'dd LLL yyyy'),
            description: extractFirstParagraph((_a = item.body) === null || _a === void 0 ? void 0 : _a.json),
        };
    });
});
