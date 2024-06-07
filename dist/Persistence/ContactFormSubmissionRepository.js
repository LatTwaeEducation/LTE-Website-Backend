import { postContentfulEntry } from "../Helpers/ContentfulServices";
import { ContentTypeId } from './Data/Constraints';
export const CreateContactForm = async (message) => {
    const response = await postContentfulEntry(message, ContentTypeId.ContactFormSubmission);
    return response;
};
