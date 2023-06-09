import { EntryId } from '../../Types/CommonTypes';
import { queryData } from '../../Services/ContentfulServices';
import type { AppAdvertisement } from '../../Types/CommonTypes';

export default async (): Promise<AppAdvertisement> => {
  type Response = {
    applicationAdvertisement: AppAdvertisement;
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

  return applicationAdvertisement;
};
