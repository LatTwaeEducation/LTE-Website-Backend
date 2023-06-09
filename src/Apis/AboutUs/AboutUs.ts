import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import type { AboutUs } from '../../Types/CommonTypes';

const getAboutUs = async (): Promise<AboutUs> => {
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

export default getAboutUs;
