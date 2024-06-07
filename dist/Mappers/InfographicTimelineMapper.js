import { formatDateString } from "../Helpers/Humaniser";
export const mapInfographicTimeline = (src) => {
    return {
        description: src.description,
        startDate: formatDateString(src.startDate),
        endDate: src.endDate ? formatDateString(src.endDate) : undefined,
    };
};
