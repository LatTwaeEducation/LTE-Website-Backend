var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { validate } from './Validator';
import { TokenType, ValidationError } from '../Types/CustomErrors/ValidationError';
import { NoTokenError } from '../Types/CustomErrors/NoTokenError';
import { convertToContentfulContactMessage } from '../Mappers/ContactMessageAndContentfulContactMessage';
import { ContentTypeId } from '../Types/CommonTypes';
import { generateUrl, URL } from './UrlGenerator';
export const postMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
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
    const { data } = yield axios.post(url, body, {
        headers: {
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN}`,
            'Content-Type': 'application/vnd.contentful.management.v1+json',
            'X-Contentful-Content-Type': ContentTypeId.ContactFormSubmission,
        },
    });
    return data;
});
