import { stringOrNull } from './StringOrNullOrUndefined';
import { assetOrNull } from './AssetOrNull';

declare module 'expect' {
  interface AsymmetricMatchers {
    stringOrNull(): void;

    assetOrNull(): void;
  }

  interface Matchers<R> {
    stringOrNull(): R;

    assetOrNull(): R;
  }
}

expect.extend({
  stringOrNull,
  assetOrNull,
});
