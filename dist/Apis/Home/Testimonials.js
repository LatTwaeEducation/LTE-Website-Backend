import { mapTestimonial } from "../../Mappers/HomeMapper";
import { getRecruitmentFormLink } from "../../Persistence/OrganisationInformationRepository";
import { getTestimonials } from "../../Persistence/TestimonialRepository";
export default async () => {
    const testimonials = await getTestimonials();
    const recruitmentFormLink = await getRecruitmentFormLink();
    return {
        testimonials: testimonials.map(mapTestimonial),
        recruitmentFormLink,
    };
};
