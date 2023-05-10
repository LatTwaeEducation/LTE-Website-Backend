import queryData from './graphql';
import { ContactInfo } from '../types';

export default async (): Promise<ContactInfo> => {
  type Response = {
    organisationInformation: ContactInfo;
  };

  const queryString = `
    query ContactInfo {
      organisationInformation(id: "2ImII347rPAsMUUHNSwI5I") {
        phoneNumbers
        emailAddresses
        address
    }
  }`;

  const { organisationInformation } = await queryData<Response>(queryString);

  return organisationInformation;
};
