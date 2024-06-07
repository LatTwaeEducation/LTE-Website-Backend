import { EntryId } from '@data/Constraints';
import { getAssetById } from '@persistence/AssetRepository';

export default async (): Promise<string> => {
  const response = await getAssetById(EntryId.LteLogo);
  return response.url;
};
