import { UpcomingActivityEventCard } from '@domain/ActivityEvent';
import { getActivitiesEvents } from '@persistence/ActivityEventRepository';
import { mapToUpcomingEventCard } from '@src/Mappers/ActivityEventMapper';

const DEFAULT_SKIP = 0;
const DEFAULT_LIMIT = 2;

export default async (
  currentEventId: string,
  skip = DEFAULT_SKIP,
  limit = DEFAULT_LIMIT,
): Promise<UpcomingActivityEventCard[]> => {
  const response = await getActivitiesEvents({
    from: new Date(),
    currentEventId,
    skip,
    limit,
  });

  return response.map(mapToUpcomingEventCard);
};
