import type { MatcherFunction } from 'expect';
// eslint-disable-next-line import/no-extraneous-dependencies
import { printReceived } from 'jest-matcher-utils';
import { Asset } from '../Types/CommonTypes';

export const assetOrNull: MatcherFunction = (actual: unknown) => {
  const pass =
    typeof actual === 'object' &&
    (actual === null ||
      (Object.hasOwn(actual, 'url') &&
        Object.hasOwn(actual, 'title') &&
        typeof (actual as Asset).url === 'string' &&
        typeof (actual as Asset).title === 'string'));

  if (pass) {
    return {
      pass: true,
      message: () => `Expected ${printReceived(actual)} not to be an Asset object or null`,
    };
  }

  return {
    pass: false,
    message: () => `Expected ${printReceived(actual)} to be a an Asset object or undefined`,
  };
};
