import { ContactInfo } from '@domain/ContactUs';
import { getContactInfoPage } from '@persistence/ContactInfoRepository';

export default async (): Promise<ContactInfo> => {
  const response = await getContactInfoPage();
  return response;
};
