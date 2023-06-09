import axios from 'axios';
import { ContactMessage } from '../Types/ContactMessages/ContactMessage';
import { validate } from './Validator';
import { TokenType, ValidationError } from '../Types/CustomErrors/ValidationError';
import { NoTokenError } from '../Types/CustomErrors/NoTokenError';
import { convertToContentfulContactMessage } from '../Mappers/ContactMessageAndContentfulContactMessage';
import { ContentTypeId } from '../Types/CommonTypes';
import { generateUrl, URL } from './UrlGenerator';

export const postMessage = async (message: ContactMessage) => {
  const validationResult = validate(message);

  if (!validationResult.isValid) {
    throw new ValidationError(validationResult.errorStatus, validationResult.message);
  }

  const { REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN } = process.env;
  if (!REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN) {
    throw new NoTokenError(TokenType.ManagementToken);
  }
  const url = `${generateUrl(URL.Management)}/entries`;

  const body = convertToContentfulContactMessage(message);

  const { data } = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN}`,
      'Content-Type': 'application/vnd.contentful.management.v1+json',
      'X-Contentful-Content-Type': ContentTypeId.ContactFormSubmission,
    },
  });

  return data;
};
