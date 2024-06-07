import { BlogTag } from '@domain/Blog';
import { getBlogTags } from '@persistence/BlogRepository';

export default async (): Promise<BlogTag[]> => {
  const response = getBlogTags();
  return response;
};
