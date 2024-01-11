import { queryData } from './ContentfulServices';
import type { Asset } from '../Types/CommonTypes';
import { EntryId } from '../Types/CommonTypes';
import { ContentfulAsset } from '../Types/Contentful/CommonTypes';

export default async (): Promise<Asset> => {
  type Response = {
    asset: ContentfulAsset;
  };

  const queryString = `
    query LteLogo($id: String!) {
      asset(id: $id) {
        title
        url
      }
    }`;

  const { asset } = await queryData<Response>(queryString, { id: EntryId.LteLogo });
  return asset.url;
};
