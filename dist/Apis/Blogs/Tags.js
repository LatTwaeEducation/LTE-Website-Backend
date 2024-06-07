import { getBlogTags } from "../../Persistence/BlogRepository";
export default async () => {
    const response = getBlogTags();
    return response;
};
