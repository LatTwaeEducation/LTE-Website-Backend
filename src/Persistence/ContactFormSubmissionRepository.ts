import { postContentfulEntry } from '@helpers/ContentfulServices';

import { ContentfulPostResponse } from './Data/Common';
import { ContentTypeId } from './Data/Constraints';
import { ContactFormSubmission, PostMessageRequest } from './Data/ContactFormSubmission';

export const CreateContactForm = async (
  message: PostMessageRequest,
): Promise<ContentfulPostResponse<ContactFormSubmission>> => {
  const response = await postContentfulEntry(message, ContentTypeId.ContactFormSubmission);
  return response;
};
