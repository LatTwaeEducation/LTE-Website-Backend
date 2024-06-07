export interface SocialMediaLinks {
  facebookLink?: string;
  facebookGroupLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
  telegramLink?: string;
  twitterLink?: string;
  youtubeLink?: string;
}

export type SingleResponse = {
  socialMediaLinks: SocialMediaLinks;
};
