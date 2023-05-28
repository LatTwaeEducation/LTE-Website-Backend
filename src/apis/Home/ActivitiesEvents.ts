import { queryData } from '../../services/ContentfulServices';
import type { Asset, BaseActivityEvent, Sys } from '../../types';

export default async (): Promise<BaseActivityEvent[]> => {
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
};
