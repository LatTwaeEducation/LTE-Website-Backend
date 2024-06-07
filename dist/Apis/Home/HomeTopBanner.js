import { mapHomeTopBanner } from "../../Mappers/HomeMapper";
import { getHomeTopBanner } from "../../Persistence/HomeTopBannerRepository";
export default async () => {
    const response = await getHomeTopBanner();
    return mapHomeTopBanner(response);
};
