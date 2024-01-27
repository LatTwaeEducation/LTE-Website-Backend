import { EntryId } from '../../Types/CommonTypes';
import { queryData } from '../../Services/ContentfulServices';
import { applicationAdvertisementMapper } from '../../Mappers/ApplicationAdvertisementMapper';
export default async () => {
    const queryString = `
  query ApplicationAdvertisement($id: String!) {
    applicationAdvertisement(id: $id) {
      featureImage {
        title
        url
      }
      title
      body
      googlePlayLink
      appStoreLink
    }
  }`;
    const { applicationAdvertisement } = await queryData(queryString, { id: EntryId.AppAdvertisement });
    return applicationAdvertisementMapper(applicationAdvertisement);
};
