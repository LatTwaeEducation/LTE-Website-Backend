import type { ContactMessage } from '../Types/ContactMessages/ContactMessage';
export type ErrorStatus = 'NOT_A_VALID_CONTACT_MESSAGE' | 'INVALID_EMAIL' | 'INVALID_PHONE_NUMBER' | 'EMPTY_MESSAGE';
export interface ValidationResult {
    isValid: boolean;
    errorStatus?: ErrorStatus;
    message?: string;
}
export declare const validate: (target: ContactMessage) => ValidationResult;
//# sourceMappingURL=Validator.d.ts.map