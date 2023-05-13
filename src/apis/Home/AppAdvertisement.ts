import { EntryId } from '../../types';
import queryData from '../../services/graphql';
import type { AppAdvertisement } from '../../types';

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
