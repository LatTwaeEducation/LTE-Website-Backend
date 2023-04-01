import queryData from 'src/services/graphql';
import type { InfographicTimeline } from 'src/types';

export default async () => {
  type Response = {
    infographicTimelineCollection: {
      items: InfographicTimeline[];
    };
  };

  const queryString = `
  query InfographicTimeline {
      infographicTimelineCollection(order: startDate_ASC) {
        items {
          startDate
          endDate
          description
        }
      }
    }      
    `;

  const { infographicTimelineCollection } = await queryData<Response>(queryString);

  return infographicTimelineCollection.items.map(({ startDate, endDate, description }) => {
    return {
      startDate,
      endDate,
      description,
    } as InfographicTimeline;
  });
};
