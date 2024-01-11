import { ContentfulAppAdvertisement, EntryId } from '../../Types/CommonTypes';
import { queryData } from '../../Services/ContentfulServices';
import type { AppAdvertisement } from '../../Types/CommonTypes';
import { applicationAdvertisementMapper } from '../../Mappers/ApplicationAdvertisementMapper';

export default async (): Promise<AppAdvertisement> => {
  type Response = {
    applicationAdvertisement: ContentfulAppAdvertisement;
  };

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

  const { applicationAdvertisement } = await queryData<Response>(queryString, { id: EntryId.AppAdvertisement });
  return applicationAdvertisementMapper(applicationAdvertisement);
};
