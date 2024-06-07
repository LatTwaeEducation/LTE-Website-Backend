import { sendGraphQl } from '@helpers/ContentfulServices';

import { CollectionResponse, InfographicTimeline } from './Data/InfographicTimeline';

export const getInfographicTimelines = async (): Promise<InfographicTimeline[]> => {
  const query = `
  query {
    infographicTimelineCollection {
      items {
        sys {
          id
        }
        description
        startDate
        endDate
        event
      }
    }
  }`;

  const { infographicTimelineCollection } = await sendGraphQl<CollectionResponse>(query);
  return infographicTimelineCollection.items;
};
