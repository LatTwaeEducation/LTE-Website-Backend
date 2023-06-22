import { IActivityEventCard } from './IActivityEventCard';

export interface IActivityEventDetails extends IActivityEventCard {
  get speaker(): string;

  get about(): string;

  get topics(): string[];
}
