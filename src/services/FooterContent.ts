import type { FooterContent } from '../types';
import queryData from './graphql';

export default async () => {
  type Response = {
    organisationInformation: FooterContent;
  };

  const queryString = `
    query FooterContent {
      organisationInformation(id: "2ImII347rPAsMUUHNSwI5I") {
        aboutUs
        phoneNumbers
        emailAddresses
        facebookLink
        facebookGroupLink
        linkedinLink
        instagramLink
        youtubeLink
        telegramLink
        twitterLink
    }
  }`;

  const { organisationInformation } = await queryData<Response>(queryString);

  return organisationInformation;
};
