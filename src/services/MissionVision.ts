import queryData from './graphql';
import type { Mission, Vision } from '../types';
import { EntryId } from '../types';

export default async (): Promise<Mission & Vision> => {
  type Response = {
    organisationInformation: Mission & Vision;
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
