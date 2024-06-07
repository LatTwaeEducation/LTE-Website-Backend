import { EntryId } from "../../Persistence/Data/Constraints";
import { getAssetById } from "../../Persistence/AssetRepository";
export default async () => {
    const response = await getAssetById(EntryId.LteLogo);
    return response.url;
};
