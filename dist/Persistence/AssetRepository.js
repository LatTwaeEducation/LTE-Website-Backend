import { sendGraphQl } from "../Helpers/ContentfulServices";
export const getAssetById = async (assetId) => {
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
    const { asset } = await sendGraphQl(query, queryVariables);
    return asset;
};
