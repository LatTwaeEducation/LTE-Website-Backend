import { mapMissionVision } from "../../Mappers/MissionVisionMapper";
import { getMissionVision } from "../../Persistence/OrganisationInformationRepository";
export default async () => {
    const response = await getMissionVision();
    return mapMissionVision(response);
};
