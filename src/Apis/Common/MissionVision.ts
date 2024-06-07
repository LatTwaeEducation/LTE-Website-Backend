import { MissionVision } from '@domain/Common';
import { mapMissionVision } from '@mappers/MissionVisionMapper';
import { getMissionVision } from '@persistence/OrganisationInformationRepository';

export default async (): Promise<MissionVision> => {
  const response = await getMissionVision();
  return mapMissionVision(response);
};
