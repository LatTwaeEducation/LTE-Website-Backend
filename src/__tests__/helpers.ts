import { Asset } from '../types';

type TypeString = 'undefined' | 'object' | 'boolean' | 'number' | 'bigint' | 'string' | 'symbol' | 'function';

export const testIsAsset = <T extends object>(taget: T) => {
  expect(taget).toHaveProperty('title');
  expect(taget).toHaveProperty('url');

  expect((taget as Asset).title).toBeDefined();
  expect(typeof (taget as Asset).title).toBe('string');

  expect((taget as Asset).url).toBeDefined();
  expect(typeof (taget as Asset).url).toBe('string');
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
    expect(typeof target[k]).toBe(expectedType);
  }
};
