import { sendGraphQl } from "../Helpers/ContentfulServices";
export const getInfographicTimelines = async () => {
    const query = `
  query {
    infographicTimelineCollection {
      items {
        sys {
          id
        }
        description
        startDate
        endDate
        event
      }
    }
  }`;
    const { infographicTimelineCollection } = await sendGraphQl(query);
    return infographicTimelineCollection.items;
};
