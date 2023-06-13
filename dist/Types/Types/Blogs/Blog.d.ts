import type { Asset } from '../CommonTypes';
import type { ContentfulGraphQLTag } from '../Contentful/CommonTypes';
export type BlogTag = ContentfulGraphQLTag;
export interface BlogCard {
    tags?: BlogTag[];
    id: string;
    thumbnail: Asset;
    title: string;
    createdAt: string;
    description: string;
}
export interface Blog extends Omit<BlogCard, 'description'> {
    body: string;
}
//# sourceMappingURL=Blog.d.ts.map