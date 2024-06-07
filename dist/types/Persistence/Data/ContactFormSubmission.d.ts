import { ContentfulPostEntry } from './Common';
export interface ContactFormSubmission {
    fullName: string;
    email: string;
    phone?: string;
    message: string;
}
export interface PostMessageRequest extends ContentfulPostEntry<ContactFormSubmission> {
}
//# sourceMappingURL=ContactFormSubmission.d.ts.map