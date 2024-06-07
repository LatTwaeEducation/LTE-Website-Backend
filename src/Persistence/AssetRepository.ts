import { sendGraphQl } from '@helpers/ContentfulServices';

import { FullAsset, SingleResponse } from './Data/Asset';

export const getAssetById = async (assetId: string): Promise<FullAsset> => {
  const query = `
    query ($assetId: String!) {
        asset(id: $assetId)  {
            sys {
                id
            }
            title
            url
        }
    }`;

  const queryVariables = {
    assetId,
  };

  const { asset } = await sendGraphQl<SingleResponse>(query, queryVariables);
  return asset;
};
