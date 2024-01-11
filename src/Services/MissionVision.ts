import { queryData } from './ContentfulServices';
import type { ContentfulMission, ContentfulVision, Mission, Vision } from '../Types/CommonTypes';
import { EntryId } from '../Types/CommonTypes';
import { missionVisionMapper } from '../Mappers/MissionVisionMapper';

export default async (): Promise<Mission & Vision> => {
  type Response = {
    organisationInformation: ContentfulMission & ContentfulVision;
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
  return missionVisionMapper(organisationInformation);
};
