import { format } from 'date-fns';
import { queryData } from '../../Services/ContentfulServices';
import type { ContentfulInfographicTimeline, InfographicTimeline } from '../../Types/CommonTypes';

export default async (): Promise<InfographicTimeline[]> => {
  type Response = {
    infographicTimelineCollection: {
      items: ContentfulInfographicTimeline[];
    };
  };

  const queryString = `
  query InfographicTimeline {
      infographicTimelineCollection(order: startDate_ASC) {
        items {
          event
          startDate
          endDate
          description
        }
      }
    }      
    `;

  const { infographicTimelineCollection } = await queryData<Response>(queryString);

  return infographicTimelineCollection.items.map(({ event, startDate, endDate, description }) => {
    return {
      title: event,
      startDate: format(new Date(startDate), 'dd LLL yyyy'),
      endDate: endDate ? format(new Date(endDate), 'dd LLL yyyy') : undefined,
      description,
    } satisfies InfographicTimeline;
  });
};
