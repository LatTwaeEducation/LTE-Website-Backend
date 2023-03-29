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
exports.getActivitiesEvents = void 0;
const graphql_1 = __importDefault(require("src/services/graphql"));
function getActivitiesEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = `
  query ActivitiesEvents_Home {
    activityEventCollection(limit: 3) {
      items {
        sys {
          id
        }
        thumbnail {
          title
          url
        }
      }
    }
  }  
  `;
        const { activityEventCollection } = yield (0, graphql_1.default)(queryString);
        return activityEventCollection.items.map((item) => {
            return {
                id: item.sys.id,
                thumbnail: item.thumbnail,
            };
        });
    });
}
exports.getActivitiesEvents = getActivitiesEvents;