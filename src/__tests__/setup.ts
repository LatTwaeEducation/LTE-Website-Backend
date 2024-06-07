import { stringOrNull } from './StringOrNullOrUndefined';

declare module 'expect' {
  interface AsymmetricMatchers {
    stringOrNull(): void;
  }

  interface Matchers<R> {
    stringOrNull(): R;
  }
}

expect.extend({
  stringOrNull,
});
