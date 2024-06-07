import { Asset } from './Asset';
import { BaseSys, GraphQLCollection, Query } from './Common';
import { EventDateTime } from './EventDateTime';

export type ActivityEvent = {
  sys: BaseSys;
  name: string;
  isCancelled: boolean;
  speaker: string;
  thumbnail?: Asset;
  eventDateAndTimeCollection: GraphQLCollection<EventDateTime>;
  topics?: string[];
  replayLink?: string;
  shareLink?: string;
  registrationLink?: string;
  about?: string;
  eventImagesCollection: GraphQLCollection<Asset>;
};

export type CollectionResponse = {
  activityEventCollection: GraphQLCollection<ActivityEvent>;
};

export type SingleResponse = {
  activityEvent: ActivityEvent;
};

export interface ActivityEventQuery extends Query {
  from?: Date;
  to?: Date;
  currentEventId?: string;
}
