import { AppAdvertisement } from '@domain/Home';
import { mapAppAds } from '@mappers/HomeMapper';
import { getAppAdvertisement } from '@persistence/ApplicationAdvertisementRepository';

export default async (): Promise<AppAdvertisement> => {
  const appAds = await getAppAdvertisement();
  return mapAppAds(appAds);
};
