import { queryData } from './ContentfulServices';
import {
  ContentfulActivityEventCardResponse,
  ContentfulGraphQLActivityEventCollectionResponse,
} from '../Types/ActivitiesEvents/ContentfulActivityEventResponses';
import { ActivityEventCardFactory } from '../Types/ActivitiesEvents/ActivityEventCardFactory';
import { PreviousActivityEventCard } from '../Types/ActivitiesEvents/PreviousActivityEventCard';
import { UpcomingActivityEventCard } from '../Types/ActivitiesEvents/UpcomingActivityEventCard';

type EventCardQueryOptions = {
  limit?: number;
  skip?: number;
  upcomingOrPrevious?: 'upcoming' | 'previous';
};

type DateTime = string;

type ActivityEventFilter = {
  eventDateTime_lte?: DateTime;
  eventDateTime_gt?: DateTime;
};

type EventCardQueryVariables = {
  skip?: number;
  limit?: number;
  where?: ActivityEventFilter;
};

const generateQueryVariables = (options: EventCardQueryOptions): EventCardQueryVariables => {
  const queryVariables: EventCardQueryVariables = {};

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

export default async (
  options: EventCardQueryOptions
): Promise<Array<PreviousActivityEventCard | UpcomingActivityEventCard>> => {
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

  const { activityEventCollection } = await queryData<
    ContentfulGraphQLActivityEventCollectionResponse<ContentfulActivityEventCardResponse>
  >(queryString, generateQueryVariables(options));

  return activityEventCollection.items.map((event) => {
    return ActivityEventCardFactory.create(event);
  });
};
