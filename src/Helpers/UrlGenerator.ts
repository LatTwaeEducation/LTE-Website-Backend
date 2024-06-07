export enum URL {
  GraphQL = 'https://graphql.contentful.com/content/v1',
  Management = 'https://api.contentful.com',
  CDN = 'https://cdn.contentful.com',
}

const SpaceId = 'gxxheul7hh8o';
const Environment = 'master';
export const generateUrl = (urlKind: URL) => `${urlKind}/spaces/${SpaceId}/environments/${Environment}`;
