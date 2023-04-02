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
const graphql_1 = __importDefault(require("src/services/graphql"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query Courses_Junior {
    courseCollection(where: { classCategory: "Everyone" }) {
      items {
        sys {
          id
        }
        name
        duration
        students
        classCategory
      }
    }
  }  
  `;
    const { courseCollection } = yield (0, graphql_1.default)(queryString);
    return courseCollection.items.map(({ sys, name, duration, students, classCategory }) => {
        return {
            id: sys.id,
            name,
            duration,
            students,
            classCategory,
        };
    });
});
