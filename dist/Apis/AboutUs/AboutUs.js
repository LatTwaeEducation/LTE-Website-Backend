import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
const getAboutUs = async () => {
    const queryString = `
  query AboutUs($organisationInformationId: String!) {
    organisationInformation(id: $organisationInformationId) {
      aboutUs
    }
  }`;
    const { organisationInformation } = await queryData(queryString, {
        organisationInformationId: EntryId.OrganisationInformation,
    });
    return {
        aboutUs: organisationInformation.aboutUs,
    };
};
export default getAboutUs;
