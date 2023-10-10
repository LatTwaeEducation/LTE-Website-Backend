import type { ContactInfo } from '../../Types/CommonTypes';
import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';

export default async (): Promise<ContactInfo> => {
  type Response = {
    contactInfo: ContactInfo;
  };

  const queryString = `
  query ContactInfo($id: String!) {
    contactInfo(id: $id) {
      heading
      description
      name
      content
      phoneNumbers
      emailAddresses
      address
      btnContent
    }
  }`;

  const { contactInfo } = await queryData<Response>(queryString, { id: EntryId.ContactInfo });

  return contactInfo;
};
