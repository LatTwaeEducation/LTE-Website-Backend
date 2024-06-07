import { InfographicTimeline as DbObject } from '@data/InfographicTimeline';
import { InfographicTimeline as Domain } from '@domain/AboutUs';
import { formatDateString } from '@helpers/Humaniser';

export const mapInfographicTimeline = (src: DbObject): Domain => {
  return {
    description: src.description,
    startDate: formatDateString(src.startDate),
    endDate: src.endDate ? formatDateString(src.endDate) : undefined,
  };
};
