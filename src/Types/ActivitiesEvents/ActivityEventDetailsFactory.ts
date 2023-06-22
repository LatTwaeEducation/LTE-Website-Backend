import { ContentfulActivityEventResponse } from './ContentfulActivityEventResponses';
import { PreviousActivityEventDetails } from './PreviousActivityEventDetails';
import { UpcomingActivityEventDetails } from './UpcomingActivityEventDetails';

export class ActivityEventDetailsFactory {
  public static create(src: ContentfulActivityEventResponse) {
    if (new Date() > new Date(src.eventDateTime)) {
      return new PreviousActivityEventDetails(src);
    }

    return new UpcomingActivityEventDetails(src);
  }
}
