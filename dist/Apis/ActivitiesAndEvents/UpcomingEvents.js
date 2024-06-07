import { mapToUpcomingEventCard } from "../../Mappers/ActivityEventMapper";
import { getActivitiesEvents } from "../../Persistence/ActivityEventRepository";
export default async () => {
    const response = await getActivitiesEvents({
        from: new Date(),
    });
    return response.map(mapToUpcomingEventCard);
};
