import queryData from './graphql';
import type { MissionVision } from '../types';
import { EntryId } from '../types';

export default async (): Promise<MissionVision> => {
  type Response = {
    organisationInformation: MissionVision;
  };

  const queryString = `
    query MissionVision($id: String!) {
      organisationInformation(id: $id) {
        mission
        vision
      }
    }`;

  const { organisationInformation } = await queryData<Response>(queryString, { id: EntryId.OrganisationInformation });

  return organisationInformation;
};
