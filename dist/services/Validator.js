import { isValidPhoneNumber } from 'libphonenumber-js';
const emailRegex = /^\w[\w.-]*@([\w-]+\.)+[\w-]+$/;
const createValidationResult = (errorStatus, message) => {
    if (!errorStatus && !message) {
        return {
            isValid: true,
        };
    }
    return {
        isValid: false,
        errorStatus,
        message,
    };
};
const MIN_WORD_COUNT = 1;
const findMissingProperty = (target) => {
    const expectedProps = ['fullName', 'email', 'message'];
    return expectedProps.filter((prop) => !Object.hasOwn(target, prop));
};
const isValidEmail = (targetEmail) => emailRegex.test(targetEmail);
export const validate = (target) => {
    if (!target) {
        return createValidationResult('NOT_A_VALID_CONTACT_MESSAGE', 'The body is undefined or null.');
    }
    if (findMissingProperty(target).length > 0) {
        return createValidationResult('NOT_A_VALID_CONTACT_MESSAGE', `The body requires these values: ${findMissingProperty(target).join(', ')}.`);
    }
    if (!isValidEmail(target.email)) {
        return createValidationResult('INVALID_EMAIL', 'The email entered is not valid.');
    }
    if (target.phone && !isValidPhoneNumber(target.phone, { defaultCountry: 'MM' })) {
        return createValidationResult('INVALID_PHONE_NUMBER', 'The phone number is not valid.');
    }
    if (target.message.length < MIN_WORD_COUNT) {
        return createValidationResult('EMPTY_MESSAGE', 'Message cannot be empty.');
    }
    return createValidationResult();
};
