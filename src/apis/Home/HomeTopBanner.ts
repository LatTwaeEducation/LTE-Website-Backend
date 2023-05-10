import queryData from '../../services/graphql';
import { EntryId } from '../../types';
import type { HomeTopBanner } from '../../types';

export default async () => {
  type Response = {
    homeTopBanner: HomeTopBanner;
  };

  const queryString = `
  query HomeTopBanner($id: String!) {
    homeTopBanner(id: $id) {
      title
      body
      learnMoreLink
    }
  }`;

  const { homeTopBanner } = await queryData<Response>(queryString, { id: EntryId.HomeTopBanner });

  return homeTopBanner;
};
