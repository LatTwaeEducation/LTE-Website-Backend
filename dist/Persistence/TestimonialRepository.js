import { sendGraphQl } from "../Helpers/ContentfulServices";
export const getTestimonials = async () => {
    const query = `
  query {
    testimonialCollection {
      items {
        name
        occupation
        feedback
      }
    }
  }`;
    const { testimonialCollection } = await sendGraphQl(query);
    return testimonialCollection.items;
};
