import { UpcomingActivityEventCard } from '@domain/ActivityEvent';
import { mapToUpcomingEventCard } from '@mappers/ActivityEventMapper';
import { getActivitiesEvents } from '@persistence/ActivityEventRepository';

export default async (): Promise<UpcomingActivityEventCard[]> => {
  const response = await getActivitiesEvents({
    from: new Date(),
  });

  return response.map(mapToUpcomingEventCard);
};
