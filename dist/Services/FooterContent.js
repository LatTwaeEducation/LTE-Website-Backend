import { queryData } from './ContentfulServices';
import { EntryId } from '../Types/CommonTypes';
export default async () => {
    const queryString = `
  query FooterContent(
    $organisationInformationId: String!
    $contactInfoId: String!
    $socialMediaLinksId: String!
    $applicationAdvertisementId: String!
  ) {
    organisationInformation(id: $organisationInformationId) {
      aboutUs
    }
    contactInfo(id: $contactInfoId) {
      phoneNumbers
      emailAddresses
    }
    socialMediaLinks(id: $socialMediaLinksId) {
      facebookLink
      facebookGroupLink
      instagramLink
      youtubeLink
      telegramLink
      twitterLink
      linkedinLink
    }
    applicationAdvertisement(id: $applicationAdvertisementId) {
      googlePlayLink
      appStoreLink
    }
  }`;
    const { organisationInformation, contactInfo, socialMediaLinks, applicationAdvertisement } = await queryData(queryString, {
        organisationInformationId: EntryId.OrganisationInformation,
        contactInfoId: EntryId.ContactInfo,
        socialMediaLinksId: EntryId.SocialMedia,
        applicationAdvertisementId: EntryId.AppAdvertisement,
    });
    return {
        ...organisationInformation,
        ...contactInfo,
        ...socialMediaLinks,
        ...applicationAdvertisement,
    };
};
