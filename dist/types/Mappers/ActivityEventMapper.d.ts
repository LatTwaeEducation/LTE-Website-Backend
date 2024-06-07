import { ActivityEvent } from "../Persistence/Data/ActivityEvent";
import { ActivityEventBanner, EventDetails, PreviousActivityEventCard, UpcomingActivityEventCard } from "../Domain/ActivityEvent";
export declare const mapToPreviousEventCard: (src: ActivityEvent) => PreviousActivityEventCard;
export declare const mapToUpcomingEventCard: (src: ActivityEvent) => UpcomingActivityEventCard;
export declare const mapToBanner: (src: ActivityEvent) => ActivityEventBanner;
export declare const mapEventDetails: (src: ActivityEvent) => EventDetails;
//# sourceMappingURL=ActivityEventMapper.d.ts.map