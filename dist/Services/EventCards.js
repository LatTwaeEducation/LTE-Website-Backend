import { queryData } from './ContentfulServices';
import { ActivityEventCardFactory } from '../Types/ActivitiesEvents/ActivityEventCardFactory';
const generateQueryVariables = (options) => {
    const queryVariables = {};
    if (options.skip) {
        queryVariables.skip = options.skip;
    }
    if (options.limit) {
        queryVariables.limit = options.limit;
    }
    if (options.upcomingOrPrevious === 'upcoming') {
        queryVariables.where = {
            eventDateTime_gt: new Date().toISOString(),
        };
    }
    if (options.upcomingOrPrevious === 'previous') {
        queryVariables.where = {
            eventDateTime_lte: new Date().toISOString(),
        };
    }
    return queryVariables;
};
export default async (options) => {
    const queryString = `
  query Events($skip: Int, $limit: Int, $where: ActivityEventFilter) {
    activityEventCollection(
      skip: $skip
      limit: $limit
      where: $where
    ) {
      items {
        sys {
          id
        }
        name
        thumbnail {
          url
          title
        }
        eventDateTime
        replayLink
        registrationLink
      }
    }
  }`;
    const { activityEventCollection } = await queryData(queryString, generateQueryVariables(options));
    return activityEventCollection.items.map(event => {
        return ActivityEventCardFactory.create(event);
    });
};
