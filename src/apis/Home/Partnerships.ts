import queryData from 'src/services/graphql';
import type { Partnership } from 'src/types';

export default async () => {
  type Response = {
    partnershipCollection: {
      items: Partnership[];
    };
  };

  const queryString = `
  query Partnerships {
    partnershipCollection {
      items {
        logo {
          title
          url
        }
        company
      }
    }
  }
  `;

  const { partnershipCollection } = await queryData<Response>(queryString);

  return partnershipCollection.items;
};
