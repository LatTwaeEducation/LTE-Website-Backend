import { AppAdvertisement, ContentfulAppAdvertisement } from '../Types/CommonTypes';

export const applicationAdvertisementMapper = (src: ContentfulAppAdvertisement): AppAdvertisement => {
  return {
    body: src.body,
    appStoreLink: src.appStoreLink,
    featureImage: src.featureImage?.url,
    title: src.title,
    googlePlayLink: src.googlePlayLink,
  };
};
