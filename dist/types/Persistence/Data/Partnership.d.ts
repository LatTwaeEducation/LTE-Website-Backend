import { Asset } from './Asset';
import { GraphQLCollection } from './Common';
export interface Partnership {
    company: string;
    logo: Asset;
}
export type CollectionResponse = {
    partnershipCollection: GraphQLCollection<Partnership>;
};
//# sourceMappingURL=Partnership.d.ts.map