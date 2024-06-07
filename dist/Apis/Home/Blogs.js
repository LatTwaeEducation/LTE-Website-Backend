import { mapToBlogCard } from "../../Mappers/BlogMapper";
import { getBlogs } from "../../Persistence/BlogRepository";
const LIMIT_COUNT = 3;
export default async () => {
    const response = await getBlogs({
        limit: LIMIT_COUNT,
    });
    return response.map(mapToBlogCard);
};
