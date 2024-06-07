import { Asset } from './Asset';
import { BaseSys, GraphQLCollection } from './Common';
import { RichText } from './RichTextFormat';
export type CoursePageSetting = {
    sys: BaseSys;
    name: string;
    title: string;
    description: string;
    image?: Asset;
    body?: RichText;
    color: string;
    secondaryColor?: string;
};
export type SingleResponse = {
    coursePageSetting: CoursePageSetting;
};
export type CollectionResponse = {
    coursePageSettingCollection: GraphQLCollection<CoursePageSetting>;
};
//# sourceMappingURL=CoursePageSetting.d.ts.map