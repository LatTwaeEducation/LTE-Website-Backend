import { getContactInfoPage } from "../../Persistence/ContactInfoRepository";
export default async () => {
    const response = await getContactInfoPage();
    return response;
};
