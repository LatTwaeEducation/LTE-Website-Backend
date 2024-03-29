import { EntryId, SocialMediaLinks } from '../../Types/CommonTypes';
import { queryData } from '../../Services/ContentfulServices';

export default async (): Promise<SocialMediaLinks> => {
  type Response = {
    socialMediaLinks: SocialMediaLinks;
  };

  const queryString = `
  query SocialMedia($socialMediaLinksId: String!) {
    socialMediaLinks(id: $socialMediaLinksId) {
      twitterLink
      facebookLink
      instagramLink
      facebookGroupLink
      facebookLink
      telegramLink
      youtubeLink
      linkedinLink
    }
  }`;

  const { socialMediaLinks } = await queryData<Response>(queryString, { socialMediaLinksId: EntryId.SocialMedia });

  return socialMediaLinks;
};
