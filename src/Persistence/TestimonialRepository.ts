import { sendGraphQl } from '@helpers/ContentfulServices';

import { CollectionResponse, Testimonial } from './Data/Testimonial';

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const query = `
  query {
    testimonialCollection {
      items {
        name
        occupation
        feedback
      }
    }
  }`;

  const { testimonialCollection } = await sendGraphQl<CollectionResponse>(query);
  return testimonialCollection.items;
};
