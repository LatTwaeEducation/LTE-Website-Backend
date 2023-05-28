import { queryData } from '../../services/ContentfulServices';
import { EntryId } from '../../types';
import type { AboutUs } from '../../types';

export default async (): Promise<AboutUs> => {
  type Response = {
    organisationInformation: {
      aboutUs: string;
    };
  };

  const queryString = `
  query AboutUs($organisationInformationId: String!) {
    organisationInformation(id: $organisationInformationId) {
      aboutUs
    }
  }`;

  const { organisationInformation } = await queryData<Response>(queryString, {
    organisationInformationId: EntryId.OrganisationInformation,
  });

  return {
    aboutUs: organisationInformation.aboutUs,
  } as AboutUs;
};
