import axios from 'axios';

export default async function queryData<T>(queryString: string, queryVariables?: object) {
  type Response = {
    data: T;
  };

  const { REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;
  if (!REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(
      ['No Access Token found.', 'Please save the access token as REACT_APP_CONTENTFUL_ACCESS_TOKEN'].join('\n')
    );
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
        Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );

  return data.data;
}
