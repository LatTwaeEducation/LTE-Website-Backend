import { mapToPreviousEventCard } from "../../Mappers/ActivityEventMapper";
import { getActivitiesEvents } from "../../Persistence/ActivityEventRepository";
export default async () => {
    const response = await getActivitiesEvents({
        to: new Date(),
    });
    return response.map(mapToPreviousEventCard);
};
