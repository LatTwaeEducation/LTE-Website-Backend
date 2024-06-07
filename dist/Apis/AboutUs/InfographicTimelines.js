import { mapInfographicTimeline } from "../../Mappers/InfographicTimelineMapper";
import { getInfographicTimelines } from "../../Persistence/InfographicTimelineRepository";
export default async () => {
    const response = await getInfographicTimelines();
    return response.map(mapInfographicTimeline);
};
