import { PreviousActivityEventCard } from './PreviousActivityEventCard';
import { UpcomingActivityEventCard } from './UpcomingActivityEventCard';
export class ActivityEventCardFactory {
    static create(src) {
        if (new Date() > new Date(src.eventDateTime)) {
            return new PreviousActivityEventCard(src);
        }
        return new UpcomingActivityEventCard(src);
    }
}
