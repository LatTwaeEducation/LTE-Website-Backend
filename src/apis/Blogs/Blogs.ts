import * as BlogCards from '../../services/BlogCards';

export default async (tags: string[]) =>
  BlogCards.default({
    tagIds: tags,
  });
