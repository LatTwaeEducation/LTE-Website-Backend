import axios from 'axios';
import * as process from 'process';
import type { ContactMessage } from '../types';
import { ContentTypeId } from '../types';

enum URL {
  GraphQL = 'https://graphql.contentful.com/content/v1',
  Management = 'https://api.contentful.com',
  CDN = 'https://cdn.contentful.com',
}

const SpaceId = 'gxxheul7hh8o';

const Environment = 'master';
const generateUrl = (urlKind: URL) => `${urlKind}/spaces/${SpaceId}/environments/${Environment}`;

const Mapper = {
  ContactMessageToContactFormSubmission: (message: ContactMessage) => {
    return {
      fields: {
        ...message,
      },
    };
  },
};

interface ContentfulRESTArrayResponse<T> {
  sys: {
    type: 'Array';
  };
  total: number;
  skip: number;
  limit: number;
  items: T[];
}

interface ContentfulTag {
  sys: {
    id: string;
  };
  name: string;
}

export const getAllTags = async (): Promise<ContentfulTag[]> => {
  const { REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;
  if (!REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(
      ['No Access Token found.', 'Please save the access token as REACT_APP_CONTENTFUL_ACCESS_TOKEN'].join('\n')
    );
  }

  const url = `${generateUrl(URL.CDN)}/tags`;
  return (
    await axios.get<ContentfulRESTArrayResponse<ContentfulTag>>(url, {
      headers: {
        Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
      },
    })
  ).data.items;
};

export const queryData = async <T>(queryString: string, queryVariables?: object) => {
  type Response = {
    data: T;
  };

  const { REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;
  if (!REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(
      ['No Access Token found.', 'Please save the access token as REACT_APP_CONTENTFUL_ACCESS_TOKEN'].join('\n')
    );
  }

  const url = generateUrl(URL.GraphQL);

  const { data } = await axios.post<Response>(
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

export const postMessage = async (message: ContactMessage) => {
  const { REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN } = process.env;
  if (!REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN) {
    throw new Error(
      [
        'No Management Token Found.',
        'In order to post message, please save the management token as REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN',
      ].join('\n')
    );
  }
  const url = `${generateUrl(URL.Management)}/entries`;

  const { data } = await axios.post(url, Mapper.ContactMessageToContactFormSubmission(message), {
    headers: {
      Authorization: `Bearer ${REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN}`,
      'Content-Type': 'application/vnd.contentful.management.v1+json',
      'X-Contentful-Content-Type': ContentTypeId.ContactFormSubmission,
    },
  });
  console.log(data);
  return data;
};
