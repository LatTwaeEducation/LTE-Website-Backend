import { mapToBlogCard } from "../../Mappers/BlogMapper";
import { getBlogs } from "../../Persistence/BlogRepository";
export default async () => {
    const response = await getBlogs();
    return response.map(mapToBlogCard);
};
