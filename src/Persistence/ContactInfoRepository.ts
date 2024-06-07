import { sendGraphQl } from '@helpers/ContentfulServices';

import { EntryId } from './Data/Constraints';
import { ContactInfo, SingleResponse } from './Data/ContactInfo';

export const getContactInfo = async (): Promise<ContactInfo> => {
  const query = `
  query ($id: String!) {
    contactInfo(id: $id) {
      phoneNumbers
      emailAddresses
    }
  }`;

  const queryVariable = {
    id: EntryId.ContactInfo,
  };

  const { contactInfo } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return contactInfo;
};

export const getContactInfoPage = async (): Promise<ContactInfo> => {
  const query = `
  query ($id: String!) {
    contactInfo(id: $id) {
      name
      phoneNumbers
      emailAddresses
      address
      btnContent
      content
      heading
      description
    }
  }`;
  const queryVariable = {
    id: EntryId.ContactInfo,
  };

  const { contactInfo } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return contactInfo;
};
