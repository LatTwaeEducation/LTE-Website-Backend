import {
  ContentfulActivityEventResponse,
  ContentfulGraphQLActivityEventEntryResponse,
} from '../../Types/ActivitiesEvents/ContentfulActivityEventResponses';
import { queryData } from '../../Services/ContentfulServices';
import { ActivityEventDetailsFactory } from '../../Types/ActivitiesEvents/ActivityEventDetailsFactory';

export default async (eventId: string) => {
  const queryString = `
  query EventDetails($eventId: String!) {
    activityEvent(id: $eventId) {
      sys {
        id
      }
      name
      speaker
      thumbnail {
        url
        title
      }
      topics
      eventDateTime
      registrationLink
      replayLink
      shareLink
      about
      eventImagesCollection {
        items {
          url
          title
        }
      }
    }
  }`;

  const queryVariables = {
    eventId,
  };

  const { activityEvent } = await queryData<
    ContentfulGraphQLActivityEventEntryResponse<ContentfulActivityEventResponse>
  >(queryString, queryVariables);

  return ActivityEventDetailsFactory.create(activityEvent);
};
