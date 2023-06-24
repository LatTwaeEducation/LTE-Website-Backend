import { PreviousActivityEventCard } from '../Types/ActivitiesEvents/PreviousActivityEventCard';
import { UpcomingActivityEventCard } from '../Types/ActivitiesEvents/UpcomingActivityEventCard';
type EventCardQueryOptions = {
    limit?: number;
    skip?: number;
    upcomingOrPrevious?: 'upcoming' | 'previous';
};
declare const _default: (options: EventCardQueryOptions) => Promise<Array<PreviousActivityEventCard | UpcomingActivityEventCard>>;
export default _default;
//# sourceMappingURL=EventCards.d.ts.map