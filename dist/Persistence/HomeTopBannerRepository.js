import { sendGraphQl } from "../Helpers/ContentfulServices";
import { EntryId } from './Data/Constraints';
export const getHomeTopBanner = async () => {
    const query = `
  query ($id: String!) {
    homeTopBanner(id: $id) {
      title
      body
      learnMoreLink
    }
  }`;
    const queryVariable = {
        id: EntryId.HomeTopBanner,
    };
    const { homeTopBanner } = await sendGraphQl(query, queryVariable);
    return homeTopBanner;
};
