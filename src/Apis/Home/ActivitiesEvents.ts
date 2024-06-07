import { ActivityEventBanner } from '@domain/ActivityEvent';
import { mapToBanner } from '@mappers/ActivityEventMapper';
import { getActivitiesEvents } from '@persistence/ActivityEventRepository';

export default async (): Promise<ActivityEventBanner[]> => {
  const response = await getActivitiesEvents();
  return response.map(mapToBanner);
};
