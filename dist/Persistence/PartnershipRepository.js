import { sendGraphQl } from "../Helpers/ContentfulServices";
export const getPartnerships = async () => {
    const query = `
  query {
    partnershipCollection {
      items {
        company
        logo {
          url
          title
        }
      }
    }
  }`;
    const { partnershipCollection } = await sendGraphQl(query);
    return partnershipCollection.items;
};
