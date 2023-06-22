import { Asset } from '../CommonTypes';
import { IPreviousActivityEventCard } from './IPreviousActivityEventCard';
export interface IPreviousActivityEventDetails extends IPreviousActivityEventCard {
    get eventImages(): Asset[];
    get shareLink(): string;
}
//# sourceMappingURL=IPreviousActivityEventDetails.d.ts.map