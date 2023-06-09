import type { ContactMessage } from '../Types/ContactMessages/ContactMessage';
import type { ContentfulContactMessageRequest } from '../Types/ContactMessages/ContentfulContactMessage';

export const convertToContentfulContactMessage = (src: ContactMessage): ContentfulContactMessageRequest => {
  const dest = {
    fields: {
      fullName: {
        'en-US': src.fullName,
      },
      email: {
        'en-US': src.email,
      },
      message: {
        'en-US': src.message,
      },
    },
  } as ContentfulContactMessageRequest;

  if (src.phone) {
    dest.fields.phone = {
      'en-US': src.phone,
    };
  }

  return dest;
};
