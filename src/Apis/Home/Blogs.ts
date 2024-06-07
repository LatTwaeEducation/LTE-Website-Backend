import { BlogCard } from '@domain/Blog';
import { mapToBlogCard } from '@mappers/BlogMapper';
import { getBlogs } from '@persistence/BlogRepository';

const LIMIT_COUNT = 3;
export default async (): Promise<BlogCard[]> => {
  const response = await getBlogs({
    limit: LIMIT_COUNT,
  });

  return response.map(mapToBlogCard);
};
