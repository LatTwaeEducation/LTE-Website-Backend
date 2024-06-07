import { NoTokenError } from "../Exceptions/NoTokenError";
import { TokenType } from "../Exceptions/TokenType";
import axios from 'axios';
import { generateUrl, URL } from './UrlGenerator';
export const sendGraphQl = async (queryString, queryVariables) => {
    const { REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;
    if (!REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
        throw new NoTokenError(TokenType.AccessToken);
    }
    const url = generateUrl(URL.GraphQL);
    const { data } = await axios.post(url, {
        query: queryString,
        variables: queryVariables,
    }, {
        headers: {
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        },
    });
    return data.data;
};
export const postContentfulEntry = async (entry, contentTypeId) => {
    const { REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN } = process.env;
    if (!REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN) {
        throw new NoTokenError(TokenType.ManagementToken);
    }
    const url = `${generateUrl(URL.Management)}/entries`;
    const { data } = await axios.post(url, entry, {
        headers: {
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN}`,
            'Content-Type': 'application/vnd.contentful.management.v1+json',
            'X-Contentful-Content-Type': contentTypeId,
        },
    });
    return data;
};
