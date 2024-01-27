import { queryData } from './ContentfulServices';
import { EntryId } from '../Types/CommonTypes';
import { missionVisionMapper } from '../Mappers/MissionVisionMapper';
export default async () => {
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
    const { organisationInformation } = await queryData(queryString, { id: EntryId.OrganisationInformation });
    return missionVisionMapper(organisationInformation);
};
