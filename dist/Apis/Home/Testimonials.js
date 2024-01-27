import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
export default async () => {
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
    const { testimonialCollection, organisationInformation } = await queryData(queryString, {
        organisationId: EntryId.OrganisationInformation,
    });
    return {
        testimonials: testimonialCollection.items,
        recruitmentFormLink: organisationInformation.recruitmentFormLink,
    };
};
