import { getAppAdvertisement } from "../../Persistence/ApplicationAdvertisementRepository";
import { getContactInfo } from "../../Persistence/ContactInfoRepository";
import { getAboutUs } from "../../Persistence/OrganisationInformationRepository";
import { getSocialMediaLinks } from "../../Persistence/SocialMediaRepository";
export default async () => {
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
