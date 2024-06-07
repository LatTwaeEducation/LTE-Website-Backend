import { getAboutUs } from "../../Persistence/OrganisationInformationRepository";
export default async () => {
    const aboutUs = await getAboutUs();
    return {
        aboutUs,
    };
};
