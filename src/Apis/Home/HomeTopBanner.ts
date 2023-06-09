import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
import type { HomeTopBanner } from '../../Types/CommonTypes';

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
