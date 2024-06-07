import { PartnershipGroup } from '@domain/Home';
import { mapPartnership } from '@mappers/HomeMapper';
import { getPartnershipFormLink } from '@persistence/OrganisationInformationRepository';
import { getPartnerships } from '@persistence/PartnershipRepository';

export default async (): Promise<PartnershipGroup> => {
  const partnerships = await getPartnerships();
  const partnershipFormLink = await getPartnershipFormLink();

  return {
    partnerships: partnerships.map(mapPartnership),
    partnershipFormLink,
  };
};
