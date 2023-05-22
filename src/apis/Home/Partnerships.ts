import queryData from '../../services/graphql';
import type { Partnership } from '../../types';
import { EntryId } from '../../types';

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
