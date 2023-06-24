import { ContentfulActivityEventCardResponse } from './ContentfulActivityEventResponses';
import { PreviousActivityEventCard } from './PreviousActivityEventCard';
import { UpcomingActivityEventCard } from './UpcomingActivityEventCard';

export class ActivityEventCardFactory {
  public static create(src: ContentfulActivityEventCardResponse) {
    if (new Date() > new Date(src.eventDateTime)) {
      return new PreviousActivityEventCard(src);
    }

    return new UpcomingActivityEventCard(src);
  }
}
