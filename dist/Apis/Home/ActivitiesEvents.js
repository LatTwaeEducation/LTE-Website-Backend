import { queryData } from '../../Services/ContentfulServices';
import { ActivityEventBanner } from '../../Types/ActivitiesEvents/ActivityEventBanner';
export default async () => {
    const queryString = `
  query ActivitiesEvents_Home {
    activityEventCollection(limit: 3) {
      items {
        sys {
          id
        }
        thumbnail {
          title
          url
        }
      }
    }
  }  
  `;
    const { activityEventCollection } = await queryData(queryString);
    return activityEventCollection.items.map(item => new ActivityEventBanner(item));
};
