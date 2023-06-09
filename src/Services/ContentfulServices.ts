import axios from 'axios';
import * as process from 'process';
import { TokenType } from '../Types/CustomErrors/ValidationError';
import type { ContentfulRESTArrayResponse } from '../Types/Contentful/ResponseTypes';
import { ContentfulRESTTag } from '../Types/Contentful/CommonTypes';
import { NoTokenError } from '../Types/CustomErrors/NoTokenError';
import { generateUrl, URL } from './UrlGenerator';

type GraphQLResponse<T> = {
  data: T;
};

export const getAllTags = async (): Promise<ContentfulRESTTag[]> => {
  const { REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;
  if (!REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
    throw new NoTokenError(TokenType.AccessToken);
  }

  const url = `${generateUrl(URL.CDN)}/tags`;
  return (
    await axios.get<ContentfulRESTArrayResponse<ContentfulRESTTag>>(url, {
      headers: {
        Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
      },
    })
  ).data.items;
};

export const queryData = async <T>(queryString: string, queryVariables?: object) => {
  const { REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;
  if (!REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
    throw new NoTokenError(TokenType.AccessToken);
  }

  const url = generateUrl(URL.GraphQL);

  const { data } = await axios.post<GraphQLResponse<T>>(
    url,
    {
      query: queryString,
      variables: queryVariables,
    },
    {
      headers: {
        Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );

  return data.data;
};
