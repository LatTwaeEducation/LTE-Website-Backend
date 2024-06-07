import { getActivitiesEvents } from "../../Persistence/ActivityEventRepository";
import { mapToUpcomingEventCard } from "../../Mappers/ActivityEventMapper";
const DEFAULT_SKIP = 0;
const DEFAULT_LIMIT = 2;
export default async (currentEventId, skip = DEFAULT_SKIP, limit = DEFAULT_LIMIT) => {
    const response = await getActivitiesEvents({
        from: new Date(),
        currentEventId,
        skip,
        limit,
    });
    return response.map(mapToUpcomingEventCard);
};
