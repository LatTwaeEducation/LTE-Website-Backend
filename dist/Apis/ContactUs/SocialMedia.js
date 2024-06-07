import { getSocialMediaLinks } from "../../Persistence/SocialMediaRepository";
export default async () => {
    const response = await getSocialMediaLinks();
    return response;
};
