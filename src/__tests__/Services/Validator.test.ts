import { validationTests } from '../ValidationTest';
import { validate } from '../../Services/Validator';
import { ContactMessage } from '../../Types/ContactMessages/ContactMessage';

describe('Validator Tests', () => {
  validationTests.forEach((testObject) => {
    test(testObject.description, () => {
      expect(validate(testObject.input as ContactMessage)).toMatchObject(testObject.expected);
    });
  });
});
