import queryData from 'src/services/graphql';
import type { Asset, BaseActivityEvent, Sys } from 'src/types';

export async function getActivitiesEvents() {
  type Response = {
    activityEventCollection: {
      items: {
        sys: Sys;
        thumbnail: Asset;
      }[];
    };
  };

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

  const { activityEventCollection } = await queryData<Response>(queryString);

  return activityEventCollection.items.map((item) => {
    return {
      id: item.sys.id,
      thumbnail: item.thumbnail,
    } as BaseActivityEvent;
  });
}
