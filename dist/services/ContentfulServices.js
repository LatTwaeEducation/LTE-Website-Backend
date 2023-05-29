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
import * as process from 'process';
import { ContentTypeId } from '../types';
var URL;
(function (URL) {
    URL["GraphQL"] = "https://graphql.contentful.com/content/v1";
    URL["Management"] = "https://api.contentful.com";
    URL["CDN"] = "https://cdn.contentful.com";
})(URL || (URL = {}));
const SpaceId = 'gxxheul7hh8o';
const Environment = 'master';
const generateUrl = (urlKind) => `${urlKind}/spaces/${SpaceId}/environments/${Environment}`;
const Mapper = {
    ContactMessageToContactFormSubmission: (message) => {
        return {
            fields: Object.assign({}, message),
        };
    },
};
export const getAllTags = () => __awaiter(void 0, void 0, void 0, function* () {
    const { REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;
    if (!REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
        throw new Error(['No Access Token found.', 'Please save the access token as REACT_APP_CONTENTFUL_ACCESS_TOKEN'].join('\n'));
    }
    const url = `${generateUrl(URL.CDN)}/tags`;
    return (yield axios.get(url, {
        headers: {
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        },
    })).data.items;
});
export const queryData = (queryString, queryVariables) => __awaiter(void 0, void 0, void 0, function* () {
    const { REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;
    if (!REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
        throw new Error(['No Access Token found.', 'Please save the access token as REACT_APP_CONTENTFUL_ACCESS_TOKEN'].join('\n'));
    }
    const url = generateUrl(URL.GraphQL);
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
export const postMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const { REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN } = process.env;
    if (!REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN) {
        throw new Error([
            'No Management Token Found.',
            'In order to post message, please save the management token as REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN',
        ].join('\n'));
    }
    const url = `${generateUrl(URL.Management)}/entries`;
    const { data } = yield axios.post(url, Mapper.ContactMessageToContactFormSubmission(message), {
        headers: {
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN}`,
            'Content-Type': 'application/vnd.contentful.management.v1+json',
            'X-Contentful-Content-Type': ContentTypeId.ContactFormSubmission,
        },
    });
    console.log(data);
    return data;
});
