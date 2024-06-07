import { EntryId } from "./Data/Constraints";
import { sendGraphQl } from "../Helpers/ContentfulServices";
export const getAppAdvertisement = async () => {
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
    const { applicationAdvertisement } = await sendGraphQl(query, queryVariable);
    return applicationAdvertisement;
};
