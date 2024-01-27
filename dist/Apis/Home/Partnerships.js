import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
export default async () => {
    const queryString = `
  query Partnerships($organisationId: String!) {
    partnershipCollection {
      items {
        logo {
          title
          url
        }
        company
      }
    }
    organisationInformation(id: $organisationId) {
      partnershipFormLink
    }
  }
  `;
    const { partnershipCollection, organisationInformation } = await queryData(queryString, {
        organisationId: EntryId.OrganisationInformation,
    });
    return {
        partnerships: partnershipCollection.items,
        partnershipFormLink: organisationInformation.partnershipFormLink,
    };
};
