import { sendGraphQl } from '@helpers/ContentfulServices';

import { CollectionResponse, Partnership } from './Data/Partnership';

export const getPartnerships = async (): Promise<Partnership[]> => {
  const query = `
  query {
    partnershipCollection {
      items {
        company
        logo {
          url
          title
        }
      }
    }
  }`;

  const { partnershipCollection } = await sendGraphQl<CollectionResponse>(query);
  return partnershipCollection.items;
};
