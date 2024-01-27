import * as BlogCards from '../../Services/BlogCards';
export default async (tags) => BlogCards.default({
    tagIds: tags,
});
