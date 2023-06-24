import EventCards from '../../Services/EventCards';
import { PreviousActivityEventCard } from '../../Types/ActivitiesEvents/PreviousActivityEventCard';

export default async (): Promise<PreviousActivityEventCard[]> =>
  (await EventCards({ upcomingOrPrevious: 'previous' })) as PreviousActivityEventCard[];
