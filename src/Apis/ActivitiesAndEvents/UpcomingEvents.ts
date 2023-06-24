import EventCards from '../../Services/EventCards';
import { UpcomingActivityEventCard } from '../../Types/ActivitiesEvents/UpcomingActivityEventCard';

export default async (): Promise<UpcomingActivityEventCard[]> =>
  (await EventCards({ upcomingOrPrevious: 'upcoming' })) as UpcomingActivityEventCard[];
