import { queryData } from './ContentfulServices';
import { EntryId } from '../Types/CommonTypes';
export default async () => {
    const queryString = `
    query LteLogo($id: String!) {
      asset(id: $id) {
        title
        url
      }
    }`;
    const { asset } = await queryData(queryString, { id: EntryId.LteLogo });
    return asset.url;
};
