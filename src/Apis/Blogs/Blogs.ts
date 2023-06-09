import * as BlogCards from '../../Services/BlogCards';

export default async (tags: string[]) =>
  BlogCards.default({
    tagIds: tags,
  });
