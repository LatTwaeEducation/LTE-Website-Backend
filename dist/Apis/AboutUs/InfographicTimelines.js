import { format } from 'date-fns';
import { queryData } from '../../Services/ContentfulServices';
export default async () => {
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
    const { infographicTimelineCollection } = await queryData(queryString);
    return infographicTimelineCollection.items.map(({ event, startDate, endDate, description }) => {
        return {
            title: event,
            startDate: format(new Date(startDate), 'dd LLL yyyy'),
            endDate: endDate ? format(new Date(endDate), 'dd LLL yyyy') : undefined,
            description,
        };
    });
};
