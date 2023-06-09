import { ContentfulBaseGraphQLCollectionResponse } from '../Contentful/ResponseTypes';
import { BaseSys } from '../Contentful/CommonTypes';
import { Asset, ClassCategory } from '../CommonTypes';
export interface ContentfulCourseCardResponse {
    sys: BaseSys;
    name: string;
    duration: number;
    students: number;
    classCategory: ClassCategory;
    thumbnail: Asset | null;
}
export interface ContentfulGraphQLCourseCollectionResponse<T extends ContentfulCourseCardResponse> {
    courseCollection: ContentfulBaseGraphQLCollectionResponse<T>;
}
//# sourceMappingURL=ContentfulCourseResponse.d.ts.map