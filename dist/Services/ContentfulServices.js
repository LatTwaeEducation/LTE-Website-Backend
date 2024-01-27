import axios from 'axios';
import { TokenType } from '../Types/CustomErrors/ValidationError';
import { NoTokenError } from '../Types/CustomErrors/NoTokenError';
import { generateUrl, URL } from './UrlGenerator';
export const getAllTags = async () => {
    const { REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;
    if (!REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
        throw new NoTokenError(TokenType.AccessToken);
    }
    const url = `${generateUrl(URL.CDN)}/tags`;
    return (await axios.get(url, {
        headers: {
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        },
    })).data.items;
};
export const queryData = async (queryString, queryVariables) => {
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
