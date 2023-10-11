import { queryData } from '../../Services/ContentfulServices';
import {
  ContentfulActivityEventBannerResponse,
  ContentfulGraphQLActivityEventCollectionResponse,
} from '../../Types/ActivitiesEvents/ContentfulActivityEventResponses';
import { ActivityEventBanner } from '../../Types/ActivitiesEvents/ActivityEventBanner';

export default async (): Promise<ActivityEventBanner[]> => {
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

  const { activityEventCollection } =
    await queryData<ContentfulGraphQLActivityEventCollectionResponse<ContentfulActivityEventBannerResponse>>(
      queryString
    );

  return activityEventCollection.items.map((item) => new ActivityEventBanner(item));
};
