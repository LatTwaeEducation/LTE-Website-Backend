import { queryData } from '../../Services/ContentfulServices';
import { ActivityEventDetailsFactory } from '../../Types/ActivitiesEvents/ActivityEventDetailsFactory';
export default async (eventId) => {
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
    const { activityEvent } = await queryData(queryString, queryVariables);
    return ActivityEventDetailsFactory.create(activityEvent);
};
