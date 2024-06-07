import { ContentfulPostEntry, ContentfulPostResponse } from '@data/Common';
import { ContentTypeId } from '@data/Constraints';
import { NoTokenError } from '@exceptions/NoTokenError';
import { TokenType } from '@exceptions/TokenType';
import axios from 'axios';

import { generateUrl, URL } from './UrlGenerator';

type GraphQLResponse<T> = {
  data: T;
};

export const sendGraphQl = async <T>(queryString: string, queryVariables?: object): Promise<T> => {
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
    },
  );
  return data.data;
};

export const postContentfulEntry = async <T>(
  entry: ContentfulPostEntry<T>,
  contentTypeId: ContentTypeId,
): Promise<ContentfulPostResponse<T>> => {
  const { REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN } = process.env;
  if (!REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN) {
    throw new NoTokenError(TokenType.ManagementToken);
  }
  const url = `${generateUrl(URL.Management)}/entries`;
  const { data } = await axios.post<ContentfulPostResponse<T>>(url, entry, {
    headers: {
      Authorization: `Bearer ${REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN}`,
      'Content-Type': 'application/vnd.contentful.management.v1+json',
      'X-Contentful-Content-Type': contentTypeId,
    },
  });
  return data;
};
