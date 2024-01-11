import { ContentfulMission, ContentfulVision, Mission, Vision } from '../Types/CommonTypes';

export const missionVisionMapper = (src: ContentfulVision & ContentfulMission): Mission & Vision => {
  return {
    mission: src.mission,
    vision: src.vision,
    missionImage: src.missionImage.url,
    visionImage: src.visionImage.url,
  };
};
