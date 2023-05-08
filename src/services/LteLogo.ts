import queryData from './graphql';
import type { Asset } from '../types';

export default async () => {
  type Response = {
    asset: Asset;
  };

  const queryString = `
    query {
      asset(id: "2K04oXuq2Kef4qmDuehDrD") {
        title
        url
      }
    }`;

  const { asset } = await queryData<Response>(queryString);

  return asset;
};
