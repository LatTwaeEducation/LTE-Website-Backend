import { ContactFormSubmission } from '@domain/ContactUs';
import { mapContactFormSubmission } from '@mappers/ContactUsMapper';
import { CreateContactForm } from '@persistence/ContactFormSubmissionRepository';

export default async (message: ContactFormSubmission): ReturnType<typeof CreateContactForm> => {
  const dbObjectContactForm = mapContactFormSubmission(message);
  const response = await CreateContactForm(dbObjectContactForm);
  return response;
};
