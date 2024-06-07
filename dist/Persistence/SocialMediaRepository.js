import { sendGraphQl } from "../Helpers/ContentfulServices";
import { EntryId } from './Data/Constraints';
export const getSocialMediaLinks = async () => {
    const query = `
  query ($id: String!) {
    socialMediaLinks(id: $id) {
      facebookLink
      facebookGroupLink
      instagramLink
      linkedinLink
      telegramLink
      twitterLink
      youtubeLink
    }
  }`;
    const queryVariable = {
        id: EntryId.SocialMedia,
    };
    const { socialMediaLinks } = await sendGraphQl(query, queryVariable);
    return socialMediaLinks;
};
