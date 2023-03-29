import queryData from 'src/services/graphql';
import type { Testimonial } from 'src/types';

export async function getTestimonials() {
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
}