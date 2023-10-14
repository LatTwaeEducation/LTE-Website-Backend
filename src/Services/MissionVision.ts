import { queryData } from './ContentfulServices';
import type { Mission, Vision } from '../Types/CommonTypes';
import { EntryId } from '../Types/CommonTypes';

export default async (): Promise<Mission & Vision> => {
  type Response = {
    organisationInformation: Mission & Vision;
  };

  const queryString = `
    query MissionVision($id: String!) {
      organisationInformation(id: $id) {
        description
        mission
        missionImage {
          url
          title
        }
        vision 
        visionImage{
          url 
          title
        }
      }
    }`;

  const { organisationInformation } = await queryData<Response>(queryString, { id: EntryId.OrganisationInformation });
  return organisationInformation;
};
