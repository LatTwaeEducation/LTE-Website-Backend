import { sendGraphQl } from '@helpers/ContentfulServices';

import { EntryId } from './Data/Constraints';
import { HomeTopBanner, SingleResponse } from './Data/HomeTopBanner';

export const getHomeTopBanner = async (): Promise<HomeTopBanner> => {
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

  const { homeTopBanner } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return homeTopBanner;
};
