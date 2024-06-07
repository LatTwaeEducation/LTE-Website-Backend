import { TestimonialGroup } from '@domain/Home';
import { mapTestimonial } from '@mappers/HomeMapper';
import { getRecruitmentFormLink } from '@persistence/OrganisationInformationRepository';
import { getTestimonials } from '@persistence/TestimonialRepository';

export default async (): Promise<TestimonialGroup> => {
  const testimonials = await getTestimonials();
  const recruitmentFormLink = await getRecruitmentFormLink();

  return {
    testimonials: testimonials.map(mapTestimonial),
    recruitmentFormLink,
  };
};
