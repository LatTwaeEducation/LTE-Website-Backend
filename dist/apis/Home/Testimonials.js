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
exports.getTestimonials = void 0;
const graphql_1 = __importDefault(require("src/services/graphql"));
function getTestimonials() {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = `
  query Testmonials {
    testimonialCollection {
      items {
        feedback
        name
        occupation
      }
    }
  }  
  `;
        const { testimonialCollection } = yield (0, graphql_1.default)(queryString);
        return testimonialCollection.items;
    });
}
exports.getTestimonials = getTestimonials;
