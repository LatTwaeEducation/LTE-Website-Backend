import { ContentfulRESTTag } from '../Types/Contentful/CommonTypes';
import { BlogTag } from '../Types/Blogs/Blog';

export const convertToBlogTag = (src: ContentfulRESTTag): BlogTag => ({
  name: src.name,
  id: src.sys.id,
});
