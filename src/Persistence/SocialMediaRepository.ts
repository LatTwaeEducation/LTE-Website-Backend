import { sendGraphQl } from '@helpers/ContentfulServices';

import { EntryId } from './Data/Constraints';
import { SingleResponse, SocialMediaLinks } from './Data/SocialMediaLinks';

export const getSocialMediaLinks = async (): Promise<SocialMediaLinks> => {
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

  const { socialMediaLinks } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return socialMediaLinks;
};
