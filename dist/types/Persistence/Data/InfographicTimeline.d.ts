import { BaseSys, GraphQLCollection } from './Common';
export interface InfographicTimeline {
    sys: BaseSys;
    event: string;
    description: string;
    startDate: string;
    endDate: string;
}
export type CollectionResponse = {
    infographicTimelineCollection: GraphQLCollection<InfographicTimeline>;
};
//# sourceMappingURL=InfographicTimeline.d.ts.map