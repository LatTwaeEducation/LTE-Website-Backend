import { Asset } from '../types';

type TypeString =
  | 'undefined'
  | 'object'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'string'
  | 'symbol'
  | 'function'
  | 'asset'
  | 'array';

export const testIsAsset = <T extends object>(target: T) => {
  expect(target).toHaveProperty('title');
  expect(target).toHaveProperty('url');

  expect((target as Asset).title).toBeDefined();
  expect(typeof (target as Asset).title).toBe('string');

  expect((target as Asset).url).toBeDefined();
  expect(typeof (target as Asset).url).toBe('string');
};

export const testHasPropertyAndType = <T extends object>(
  target: T,
  propertyPath: string,
  expectedType: TypeString,
  optional = false
) => {
  expect(target).toHaveProperty(propertyPath);

  const k = propertyPath as keyof T;
  if (!optional) {
    expect(target[k]).toBeDefined();
  }
  if (target[k]) {
    switch (expectedType) {
      case 'asset':
        testIsAsset(target[k] as object);
        break;
      case 'array':
        expect(Array.isArray(target[k])).toBeTruthy();
        break;
      default:
        expect(typeof target[k]).toBe(expectedType);
    }
  }
};
