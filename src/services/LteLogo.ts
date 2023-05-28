import { queryData } from './ContentfulServices';
import type { Asset } from '../types';
import { EntryId } from '../types';

export default async () => {
  type Response = {
    asset: Asset;
  };

  const queryString = `
    query LteLogo($id: String!) {
      asset(id: $id) {
        title
        url
      }
    }`;

  const { asset } = await queryData<Response>(queryString, { id: EntryId.LteLogo });

  return asset;
};
