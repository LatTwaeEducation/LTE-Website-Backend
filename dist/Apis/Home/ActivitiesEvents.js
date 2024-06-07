import { mapToBanner } from "../../Mappers/ActivityEventMapper";
import { getActivitiesEvents } from "../../Persistence/ActivityEventRepository";
export default async () => {
    const response = await getActivitiesEvents();
    return response.map(mapToBanner);
};
