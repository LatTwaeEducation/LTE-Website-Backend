import type { MatcherFunction } from 'expect';
// eslint-disable-next-line import/no-extraneous-dependencies
import { printReceived } from 'jest-matcher-utils';

export const stringOrNull: MatcherFunction = (actual: unknown) => {
  const pass = typeof actual === 'string' || actual === null;
  if (pass) {
    return {
      pass: true,
      message: () => `Expected ${printReceived(actual)} not to be a string or null`,
    };
  }
  return {
    pass: false,
    message: () => `Expected ${printReceived(actual)} to be a string or null`,
  };
};
