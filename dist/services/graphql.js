var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
export default function queryData(queryString, queryVariables) {
    return __awaiter(this, void 0, void 0, function* () {
        const { REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;
        if (!REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
            throw new Error(['No Access Token found.', 'Please save the access token as CONTENTFUL_ACCESS_TOKEN'].join('\n'));
        }
        const url = 'https://graphql.contentful.com/content/v1/spaces/gxxheul7hh8o/environments/master';
        const { data } = yield axios.post(url, {
            query: queryString,
            variables: queryVariables,
        }, {
            headers: {
                Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
            },
        });
        return data.data;
    });
}
