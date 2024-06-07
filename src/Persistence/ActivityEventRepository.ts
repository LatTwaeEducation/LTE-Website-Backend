import { ActivityEvent, ActivityEventQuery, CollectionResponse, SingleResponse } from '@data/ActivityEvent';
import { sendGraphQl } from '@helpers/ContentfulServices';

export const getActivityEventById = async (eventId: string): Promise<ActivityEvent> => {
  const query = `
  query ($id: String!) {
    activityEvent(id: $id) {
      sys {
        id
      }
      name
      isCancelled
      speaker
      thumbnail {
        url
        title
      }
      eventDateAndTimeCollection {
        items {
          dateTime
        }
      }
      topics
      replayLink
      shareLink
      registrationLink
      about
      eventImagesCollection {
        items {
          url
          title
        }
      }
    }
  }`;

  const queryVariable = {
    id: eventId,
  };

  const { activityEvent } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return activityEvent;
};

export const getActivitiesEvents = async (queryVariables?: ActivityEventQuery): Promise<ActivityEvent[]> => {
  const query = `
  query (
    $from: DateTime
    $to: DateTime
    $limit: Int
    $skip: Int
    $currentEventId: String
  ) {
    activityEventCollection(
      where: {
        sys: { id_not: $currentEventId }
        eventDateAndTime: { dateTime_gt: $from, dateTime_lte: $to }
      }
      limit: $limit
      skip: $skip
    ) {
      items {
        sys {
          id
        }
        name
        speaker
        thumbnail {
          url
          title
        }
        eventDateAndTimeCollection {
          items {
              dateTime
          }
        }
        topics
        replayLink
        shareLink
        registrationLink
        about
        eventImagesCollection {
          items {
            url
            title
          }
        }
      }
    }
  }`;

  const { activityEventCollection } = await sendGraphQl<CollectionResponse>(query, queryVariables);
  return activityEventCollection.items;
};
