import { OrganisationInformation } from '@data/OrganisationInformation';
import { MissionVision } from '@domain/Common';

export const mapMissionVision = (src: OrganisationInformation): MissionVision => ({
  mission: src.mission,
  missionImage: src.missionImage?.url,
  vision: src.vision,
  visionImage: src.visionImage?.url,
});
