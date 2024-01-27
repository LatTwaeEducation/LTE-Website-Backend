import { queryData } from '../../Services/ContentfulServices';
import { EntryId } from '../../Types/CommonTypes';
export default async () => {
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
    const { contactInfo } = await queryData(queryString, { id: EntryId.ContactInfo });
    return contactInfo;
};
