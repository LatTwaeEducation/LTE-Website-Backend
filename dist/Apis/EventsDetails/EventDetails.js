import { mapEventDetails } from "../../Mappers/ActivityEventMapper";
import { getActivityEventById } from "../../Persistence/ActivityEventRepository";
export default async (eventId) => {
    const response = await getActivityEventById(eventId);
    return mapEventDetails(response);
};
