"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogs = void 0;
const CustomHtmlRenderers_1 = require("src/services/CustomHtmlRenderers");
const graphql_1 = __importDefault(require("src/services/graphql"));
function getBlogs() {
    return __awaiter(this, void 0, void 0, function* () {
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
        const { blogCollection } = yield (0, graphql_1.default)(queryString);
        return blogCollection.items.map((item) => {
            var _a;
            return {
                id: item.sys.id,
                thumbnail: item.thumbnail,
                title: item.title,
                publishedAt: item.sys.publishAt,
                description: (0, CustomHtmlRenderers_1.extractFirstParagraph)((_a = item.body) === null || _a === void 0 ? void 0 : _a.json),
            };
        });
    });
}
exports.getBlogs = getBlogs;
