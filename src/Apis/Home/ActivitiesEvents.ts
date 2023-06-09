import { queryData } from '../../Services/ContentfulServices';
import type { Asset, BaseActivityEvent } from '../../Types/CommonTypes';
import type { BaseSys } from '../../Types/Contentful/CommonTypes';

export default async (): Promise<BaseActivityEvent[]> => {
  type Response = {
    activityEventCollection: {
      items: {
        sys: BaseSys;
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
