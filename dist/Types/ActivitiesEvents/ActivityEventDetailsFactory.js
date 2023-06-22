import { PreviousActivityEventDetails } from './PreviousActivityEventDetails';
import { UpcomingActivityEventDetails } from './UpcomingActivityEventDetails';
export class ActivityEventDetailsFactory {
    static create(src) {
        if (new Date() > new Date(src.eventDateTime)) {
            return new PreviousActivityEventDetails(src);
        }
        return new UpcomingActivityEventDetails(src);
    }
}
