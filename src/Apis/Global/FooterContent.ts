import { FooterContent } from '@domain/Common';
import { getAppAdvertisement } from '@persistence/ApplicationAdvertisementRepository';
import { getContactInfo } from '@persistence/ContactInfoRepository';
import { getAboutUs } from '@persistence/OrganisationInformationRepository';
import { getSocialMediaLinks } from '@persistence/SocialMediaRepository';

export default async (): Promise<FooterContent> => {
  const [aboutUs, socialMediaLinks, contactInfo, appAds] = await Promise.all([
    getAboutUs(),
    getSocialMediaLinks(),
    getContactInfo(),
    getAppAdvertisement(),
  ]);

  return {
    aboutUs: aboutUs,
    phoneNumbers: contactInfo.phoneNumbers,
    emailAddresses: contactInfo.emailAddresses,
    facebookLink: socialMediaLinks.facebookLink,
    facebookGroupLink: socialMediaLinks.facebookGroupLink,
    instagramLink: socialMediaLinks.instagramLink,
    youtubeLink: socialMediaLinks.youtubeLink,
    telegramLink: socialMediaLinks.telegramLink,
    twitterLink: socialMediaLinks.twitterLink,
    linkedinLink: socialMediaLinks.linkedinLink,
    googlePlayLink: appAds.googlePlayLink,
    appStoreLink: appAds.appStoreLink,
  };
};
