import { Asset } from './Asset';

export interface AppAdvertisement {
  googlePlayLink?: string;
  appStoreLink?: string;
  featureImage?: Asset;
  title: string;
  body: string;
}

export type SingleResponse = {
  applicationAdvertisement: AppAdvertisement;
};
