var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EntryId } from '../../types';
import { queryData } from '../../services/ContentfulServices';
export default () => __awaiter(void 0, void 0, void 0, function* () {
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
    const { socialMediaLinks } = yield queryData(queryString, { socialMediaLinksId: EntryId.SocialMedia });
    return socialMediaLinks;
});
