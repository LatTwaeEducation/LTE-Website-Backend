import { IUpcomingActivityEventCard } from './IUpcomingActivityEventCard';

export interface IUpcomingActivityEventDetails extends IUpcomingActivityEventCard {
  get time(): string;
}
