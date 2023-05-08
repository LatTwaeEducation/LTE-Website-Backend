import queryData from '../../services/graphql';
import type { Testimonial } from '../../types';

export default async () => {
  type Response = {
    testimonialCollection: {
      items: Testimonial[];
    };
  };

  const queryString = `
  query Testmonials {
    testimonialCollection {
      items {
        feedback
        name
        occupation
      }
    }
  }  
  `;

  const { testimonialCollection } = await queryData<Response>(queryString);

  return testimonialCollection.items;
};
