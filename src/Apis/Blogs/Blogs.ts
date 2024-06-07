import { BlogCard } from '@domain/Blog';
import { mapToBlogCard } from '@mappers/BlogMapper';
import { getBlogs } from '@persistence/BlogRepository';

export default async (): Promise<BlogCard[]> => {
  const response = await getBlogs();
  return response.map(mapToBlogCard);
};
