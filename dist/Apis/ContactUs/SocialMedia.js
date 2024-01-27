import { EntryId } from '../../Types/CommonTypes';
import { queryData } from '../../Services/ContentfulServices';
export default async () => {
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
    const { socialMediaLinks } = await queryData(queryString, { socialMediaLinksId: EntryId.SocialMedia });
    return socialMediaLinks;
};
