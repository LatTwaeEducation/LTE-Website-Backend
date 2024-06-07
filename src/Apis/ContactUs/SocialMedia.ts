import { SocialMediaLinks } from '@domain/Common';
import { getSocialMediaLinks } from '@persistence/SocialMediaRepository';

export default async (): Promise<SocialMediaLinks> => {
  const response = await getSocialMediaLinks();
  return response;
};
