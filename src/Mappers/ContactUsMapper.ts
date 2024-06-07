import { PostMessageRequest } from '@data/ContactFormSubmission';
import { ContactInfo as DbObjContactInfo } from '@data/ContactInfo';
import { ContactFormSubmission, ContactInfo as DomainContactInfo } from '@domain/ContactUs';

export const mapContactFormSubmission = (src: ContactFormSubmission): PostMessageRequest => {
  return {
    fields: {
      fullName: {
        'en-US': src.fullName,
      },
      email: {
        'en-US': src.email,
      },
      phone: {
        'en-US': src.phone,
      },
      message: {
        'en-US': src.message,
      },
    },
  };
};

export const mapContactUs = (src: DbObjContactInfo): DomainContactInfo => ({
  name: src.name,
  content: src.content,
  heading: src.heading,
  phoneNumbers: src.phoneNumbers,
  emailAddresses: src.emailAddresses,
  address: src.address,
  btnContent: src.btnContent,
});
