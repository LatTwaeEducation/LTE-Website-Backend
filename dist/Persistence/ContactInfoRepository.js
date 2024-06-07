import { sendGraphQl } from "../Helpers/ContentfulServices";
import { EntryId } from './Data/Constraints';
export const getContactInfo = async () => {
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
    const { contactInfo } = await sendGraphQl(query, queryVariable);
    return contactInfo;
};
export const getContactInfoPage = async () => {
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
    const { contactInfo } = await sendGraphQl(query, queryVariable);
    return contactInfo;
};
