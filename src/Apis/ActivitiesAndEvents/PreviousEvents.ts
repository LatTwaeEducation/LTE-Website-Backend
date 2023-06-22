import { queryData } from '../../Services/ContentfulServices';
import {
  ContentfulGraphQLActivityEventCollectionResponse,
  ContentfulPreviousActivityEventCardResponse,
} from '../../Types/ActivitiesEvents/ContentfulActivityEventResponses';
import { PreviousActivityEventCard } from '../../Types/ActivitiesEvents/PreviousActivityEventCard';

export default async () => {
  const queryString = `
  query UpcomingEvents($currentTime: DateTime!) {
    activityEventCollection(where: { eventDateTime_lte: $currentTime }) {
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
      }
    }
  }`;

  const queryVariables = {
    currentTime: new Date().toISOString(),
  };

  const { activityEventCollection } = await queryData<
    ContentfulGraphQLActivityEventCollectionResponse<ContentfulPreviousActivityEventCardResponse>
  >(queryString, queryVariables);

  return activityEventCollection.items.map((item) => new PreviousActivityEventCard(item));
};
