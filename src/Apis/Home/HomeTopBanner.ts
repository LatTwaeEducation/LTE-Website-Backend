import { HomeTopBanner } from '@domain/Home';
import { mapHomeTopBanner } from '@mappers/HomeMapper';
import { getHomeTopBanner } from '@persistence/HomeTopBannerRepository';

export default async (): Promise<HomeTopBanner> => {
  const response = await getHomeTopBanner();
  return mapHomeTopBanner(response);
};
