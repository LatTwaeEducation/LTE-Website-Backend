import { queryData } from '../../Services/ContentfulServices';
import {
  ContentfulGraphQLActivityEventCollectionResponse,
  ContentfulUpcomingActivityEventCardResponse,
} from '../../Types/ActivitiesEvents/ContentfulActivityEventResponses';
import { UpcomingActivityEventCard } from '../../Types/ActivitiesEvents/UpcomingActivityEventCard';

export default async () => {
  const queryString = `
  query UpcomingEvents($currentTime: DateTime!) {
    activityEventCollection(where: { eventDateTime_gt: $currentTime }) {
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
        registrationLink
      }
    }
  }`;

  const queryVariables = {
    currentTime: new Date().toISOString(),
  };

  const { activityEventCollection } = await queryData<
    ContentfulGraphQLActivityEventCollectionResponse<ContentfulUpcomingActivityEventCardResponse>
  >(queryString, queryVariables);

  return activityEventCollection.items.map((item) => new UpcomingActivityEventCard(item));
};
