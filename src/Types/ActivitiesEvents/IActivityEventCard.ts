import { IActivityEventBanner } from './IActivityEventBanner';

export interface IActivityEventCard extends IActivityEventBanner {
  get name(): string;

  get date(): string;
}
