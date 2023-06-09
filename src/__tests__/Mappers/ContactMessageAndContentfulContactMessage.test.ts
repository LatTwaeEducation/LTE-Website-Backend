import { ContactMessage } from '../../Types/ContactMessages/ContactMessage';
import { ContentfulContactMessageRequest } from '../../Types/ContactMessages/ContentfulContactMessage';
import { convertToContentfulContactMessage } from '../../Mappers/ContactMessageAndContentfulContactMessage';

describe('ContactMessage and ContentfulContactMessage Mappers test', () => {
  describe('From ContactMessage to ContentfulContactMessage', () => {
    test('Should convert correctly for full data', () => {
      const src: ContactMessage = {
        fullName: 'Zaw Nay Lin',
        message: 'Hello World!',
        phone: '09795841501',
        email: 'zzz@example.com',
      };

      const target: ContentfulContactMessageRequest = {
        fields: {
          fullName: {
            'en-US': src.fullName,
          },
          message: {
            'en-US': src.message,
          },
          phone: {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            'en-US': src.phone!,
          },
          email: {
            'en-US': src.email,
          },
        },
      };

      expect(convertToContentfulContactMessage(src)).toEqual(target);
    });

    test('Should convert correctly missing phone data', () => {
      const src: ContactMessage = {
        fullName: 'Zaw Nay Lin',
        message: 'Hello World!',
        email: 'zzz@example.com',
      };

      const target: ContentfulContactMessageRequest = {
        fields: {
          fullName: {
            'en-US': src.fullName,
          },
          message: {
            'en-US': src.message,
          },
          email: {
            'en-US': src.email,
          },
        },
      };

      expect(convertToContentfulContactMessage(src)).toEqual(target);
    });
  });
});
