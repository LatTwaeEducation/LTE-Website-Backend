import { PreviousActivityEventCard } from '@domain/ActivityEvent';
import { mapToPreviousEventCard } from '@mappers/ActivityEventMapper';
import { getActivitiesEvents } from '@persistence/ActivityEventRepository';

export default async (): Promise<PreviousActivityEventCard[]> => {
  const response = await getActivitiesEvents({
    to: new Date(),
  });

  return response.map(mapToPreviousEventCard);
};
