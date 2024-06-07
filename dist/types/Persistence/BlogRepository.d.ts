import { Blog } from './Data/Blog';
import { Query, Tag } from './Data/Common';
export declare const getBlogById: (blogId: string) => Promise<Blog>;
export declare const getBlogs: (queryVariables?: Query) => Promise<Blog[]>;
export declare const getBlogTags: () => Promise<Tag[]>;
//# sourceMappingURL=BlogRepository.d.ts.map