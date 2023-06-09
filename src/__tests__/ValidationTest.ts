import type { ValidationResult } from '../Services/Validator';
import { ContactMessage } from '../Types/ContactMessages/ContactMessage';

type ValidationTest = {
  description: string;
  input: Partial<ContactMessage>;
  expected: ValidationResult;
};

export const validationTests: ValidationTest[] = [
  {
    description: 'Validation should pass with complete data.(With Local Phone Number)',
    input: {
      fullName: 'zzz',
      email: 'zzz@example.com',
      phone: '09795841501',
      message: 'Hello world!',
    },
    expected: {
      isValid: true,
    },
  },
  {
    description: 'Validation should pass with complete data.(With International Phone Number)',
    input: {
      fullName: 'zzz',
      email: 'zzz@example.com',
      phone: '+959795841501',
      message: 'Hello world!',
    },
    expected: {
      isValid: true,
    },
  },

  {
    description: 'Validation should pass without phone.',
    input: {
      fullName: 'zzz',
      email: 'zzz@example.com',
      message: 'Hello world!',
    },
    expected: {
      isValid: true,
    },
  },
  {
    description: 'Validation should fail with zero data.',
    input: {},
    expected: {
      isValid: false,
      errorStatus: 'NOT_A_VALID_CONTACT_MESSAGE',
    },
  },
  {
    description: 'Validation should fail with only one data field.',
    input: { fullName: 'zzz' },
    expected: {
      isValid: false,
      errorStatus: 'NOT_A_VALID_CONTACT_MESSAGE',
    },
  },
  {
    description: 'Validation should fail with one missing data.',
    input: { fullName: 'zzz', email: 'zzz@example.com' },
    expected: {
      isValid: false,
      errorStatus: 'NOT_A_VALID_CONTACT_MESSAGE',
    },
  },
  {
    description: 'Validation should fail with invalid email.',
    input: { fullName: 'zzz', email: '2asda', message: 'Hello world!' },
    expected: {
      isValid: false,
      errorStatus: 'INVALID_EMAIL',
    },
  },
  {
    description: 'Validation should fail with invalid phone number (with letters).',
    input: {
      fullName: 'zzz',
      email: 'zzz@example.com',
      message: 'Hello world!',
      phone: 'ad12asdad',
    },
    expected: {
      isValid: false,
      errorStatus: 'INVALID_PHONE_NUMBER',
    },
  },
  {
    description: 'Validation should fail with invalid phone number (wrong format phone numbers).',
    input: {
      fullName: 'zzz',
      email: 'zzz@example.com',
      message: 'Hello world!',
      phone: '1111111111111111111111111111111',
    },
    expected: {
      isValid: false,
      errorStatus: 'INVALID_PHONE_NUMBER',
    },
  },
  {
    description: 'Validation should fail with empty message body.',
    input: {
      fullName: 'zzz',
      email: 'zzz@example.com',
      message: '',
    },
    expected: {
      isValid: false,
      errorStatus: 'EMPTY_MESSAGE',
    },
  },
];
