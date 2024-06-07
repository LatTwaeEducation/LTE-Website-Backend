import { mapContactFormSubmission } from "../../Mappers/ContactUsMapper";
import { CreateContactForm } from "../../Persistence/ContactFormSubmissionRepository";
export default async (message) => {
    const dbObjectContactForm = mapContactFormSubmission(message);
    const response = await CreateContactForm(dbObjectContactForm);
    return response;
};
