import { InfographicTimeline } from '@domain/AboutUs';
import { mapInfographicTimeline } from '@mappers/InfographicTimelineMapper';
import { getInfographicTimelines } from '@persistence/InfographicTimelineRepository';

export default async (): Promise<InfographicTimeline[]> => {
  const response = await getInfographicTimelines();
  return response.map(mapInfographicTimeline);
};
