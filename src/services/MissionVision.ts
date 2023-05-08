import queryData from './graphql';
import type { MissionVision } from '../types';

export default async (): Promise<MissionVision> => {
  type Response = {
    organisationInformation: MissionVision;
  };

  const queryString = `
    query MissionVision {
      organisationInformation(id: "2ImII347rPAsMUUHNSwI5I"){
        mission
        vision
      }
    }`;

  const { organisationInformation } = await queryData<Response>(queryString);

  return organisationInformation;
};
