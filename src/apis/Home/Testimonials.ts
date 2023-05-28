import { queryData } from '../../services/ContentfulServices';
import type { Testimonial } from '../../types';
import { EntryId } from '../../types';

export default async (): Promise<{
  testimonials: Testimonial[];
  recruitmentFormLink: string;
}> => {
  type Response = {
    testimonialCollection: {
      items: Testimonial[];
    };
    organisationInformation: {
      recruitmentFormLink: string;
    };
  };

  const queryString = `
  query Testimonials($organisationId: String!) {
    testimonialCollection {
      items {
        feedback
        name
        occupation
      }
    }
    organisationInformation(id: $organisationId) {
      recruitmentFormLink
    }
  }  
  `;

  const { testimonialCollection, organisationInformation } = await queryData<Response>(queryString, {
    organisationId: EntryId.OrganisationInformation,
  });

  return {
    testimonials: testimonialCollection.items,
    recruitmentFormLink: organisationInformation.recruitmentFormLink,
  };
};
