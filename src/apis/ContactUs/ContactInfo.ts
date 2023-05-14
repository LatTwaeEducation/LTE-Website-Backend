import type { ContactInfo } from '../../types';
import queryData from '../../services/graphql';
import { EntryId } from '../../types';

export default async (): Promise<ContactInfo> => {
  type Response = {
    contactInfo: ContactInfo;
  };

  const queryString = `
  query ContactInfo($id: String!) {
    contactInfo(id: $id) {
      phoneNumbers
      emailAddresses
      address
    }
  }`;

  const { contactInfo } = await queryData<Response>(queryString, { id: EntryId.ContactInfo });

  return contactInfo;
};
