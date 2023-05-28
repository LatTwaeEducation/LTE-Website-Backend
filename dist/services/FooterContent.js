var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { queryData } from './ContentfulServices';
import { EntryId } from '../types';
export default () => __awaiter(void 0, void 0, void 0, function* () {
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
    const { organisationInformation, contactInfo, socialMediaLinks, applicationAdvertisement } = yield queryData(queryString, {
        organisationInformationId: EntryId.OrganisationInformation,
        contactInfoId: EntryId.ContactInfo,
        socialMediaLinksId: EntryId.SocialMedia,
        applicationAdvertisementId: EntryId.AppAdvertisement,
    });
    return Object.assign(Object.assign(Object.assign(Object.assign({}, organisationInformation), contactInfo), socialMediaLinks), applicationAdvertisement);
});
