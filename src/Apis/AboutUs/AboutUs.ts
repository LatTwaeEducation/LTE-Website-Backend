import { AboutUs } from '@domain/AboutUs';
import { getAboutUs } from '@persistence/OrganisationInformationRepository';

export default async (): Promise<AboutUs> => {
  const aboutUs = await getAboutUs();
  return {
    aboutUs,
  };
};
