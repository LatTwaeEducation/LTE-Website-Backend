import { getAllTags } from '../../Services/ContentfulServices';
import type { BlogTag } from '../../Types/Blogs/Blog';
import { convertToBlogTag } from '../../Mappers/ContentfulRESTTagAndBlogTag';

export default async (): Promise<BlogTag[]> => (await getAllTags()).map(convertToBlogTag);
