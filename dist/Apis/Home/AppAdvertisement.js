import { mapAppAds } from "../../Mappers/HomeMapper";
import { getAppAdvertisement } from "../../Persistence/ApplicationAdvertisementRepository";
export default async () => {
    const appAds = await getAppAdvertisement();
    return mapAppAds(appAds);
};
