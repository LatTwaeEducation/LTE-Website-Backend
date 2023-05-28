import { format } from 'date-fns';
import { queryData } from '../../services/ContentfulServices';
import type { InfographicTimeline } from '../../types';

export default async (): Promise<InfographicTimeline[]> => {
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
      startDate: format(new Date(startDate), 'dd LLL yyyy'),
      endDate: endDate ? format(new Date(endDate), 'dd LLL yyyy') : undefined,
      description,
    } as InfographicTimeline;
  });
};
