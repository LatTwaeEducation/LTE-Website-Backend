import { AppAdvertisement, SingleResponse } from '@data/ApplicationAdvertisement';
import { EntryId } from '@data/Constraints';
import { sendGraphQl } from '@helpers/ContentfulServices';

export const getAppAdvertisement = async (): Promise<AppAdvertisement> => {
  const query = `
  query ($id: String!) {
    applicationAdvertisement(id: $id) {
      appStoreLink
      googlePlayLink
      title
      body
      featureImage {
        url
        title
      }
    }
  }`;

  const queryVariable = {
    id: EntryId.AppAdvertisement,
  };

  const { applicationAdvertisement } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return applicationAdvertisement;
};
