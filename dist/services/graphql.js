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
const axios_1 = __importDefault(require("axios"));
function queryData(queryString, queryVariables) {
    return __awaiter(this, void 0, void 0, function* () {
        const { CONTENTFUL_ACCESS_TOKEN } = process.env;
        if (!CONTENTFUL_ACCESS_TOKEN) {
            throw new Error(['No Access Token found.', 'Please save the access token as CONTENTFUL_ACCESS_TOKEN'].join('\n'));
        }
        const url = 'https://graphql.contentful.com/content/v1/spaces/gxxheul7hh8o/environments/master';
        const { data } = yield axios_1.default.post(url, {
            query: queryString,
            variables: queryVariables,
        }, {
            headers: {
                Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
            },
        });
        return data.data;
    });
}
exports.default = queryData;
