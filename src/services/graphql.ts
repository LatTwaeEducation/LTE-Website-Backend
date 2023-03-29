import axios from 'axios';

export default async function queryData<T>(queryString: string, queryVariables?: object) {
  type Response = {
    data: T;
  };

  const { CONTENTFUL_ACCESS_TOKEN } = process.env;
  if (!CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(['No Access Token found.', 'Please save the access token as CONTENTFUL_ACCESS_TOKEN'].join('\n'));
  }

  const url = 'https://graphql.contentful.com/content/v1/spaces/gxxheul7hh8o/environments/master';

  const { data } = await axios.post<Response>(
    url,
    {
      query: queryString,
      variables: queryVariables,
    },
    {
      headers: {
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );

  return data.data;
}
