import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
export default async () => {
    const queryString = `
  query HomeTopBanner($id: String!) {
    homeTopBanner(id: $id) {
      title
      body
      learnMoreLink
    }
  }`;
    const { homeTopBanner } = await queryData(queryString, { id: EntryId.HomeTopBanner });
    return homeTopBanner;
};
