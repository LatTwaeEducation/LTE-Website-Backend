export const missionVisionMapper = (src) => {
    return {
        mission: src.mission,
        vision: src.vision,
        missionImage: src.missionImage.url,
        visionImage: src.visionImage.url,
    };
};
