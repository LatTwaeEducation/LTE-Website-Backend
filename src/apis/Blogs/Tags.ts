import { getAllTags } from '../../services/ContentfulServices';
import type { BlogTag } from '../../types';

export default async (): Promise<BlogTag[]> =>
  (await getAllTags()).map((tag) => ({
    name: tag.name,
    id: tag.sys.id,
  }));
