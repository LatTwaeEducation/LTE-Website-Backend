import { mapPartnership } from "../../Mappers/HomeMapper";
import { getPartnershipFormLink } from "../../Persistence/OrganisationInformationRepository";
import { getPartnerships } from "../../Persistence/PartnershipRepository";
export default async () => {
    const partnerships = await getPartnerships();
    const partnershipFormLink = await getPartnershipFormLink();
    return {
        partnerships: partnerships.map(mapPartnership),
        partnershipFormLink,
    };
};
