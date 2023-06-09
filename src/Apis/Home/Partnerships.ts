import { queryData } from '../../Services/ContentfulServices';
import type { Partnership } from '../../Types/CommonTypes';
import { EntryId } from '../../Types/CommonTypes';

export default async (): Promise<{
  partnerships: Partnership[];
  partnershipFormLink: string;
}> => {
  type Response = {
    partnershipCollection: {
      items: Partnership[];
    };
    organisationInformation: {
      partnershipFormLink: string;
    };
  };

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

  const { partnershipCollection, organisationInformation } = await queryData<Response>(queryString, {
    organisationId: EntryId.OrganisationInformation,
  });

  return {
    partnerships: partnershipCollection.items,
    partnershipFormLink: organisationInformation.partnershipFormLink,
  };
};
