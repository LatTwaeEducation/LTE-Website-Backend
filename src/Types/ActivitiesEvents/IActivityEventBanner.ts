import { Asset } from '../CommonTypes';

export interface IActivityEventBanner {
  get thumbnail(): Asset | null;

  get id(): string;
}
