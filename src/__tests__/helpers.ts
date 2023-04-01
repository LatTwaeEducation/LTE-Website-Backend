type TypeString =
  | 'undefined'
  | 'object'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'string'
  | 'symbol'
  | 'function'
  | 'object';

const isTypeString = (type: string): type is TypeString =>
  ['undefined', 'object', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function', 'object'].includes(type);

const propertyHasType = <T extends object>(target: T, key: keyof T, type: unknown) => {
  if (type === null && target[key] !== null) {
    return false;
  }

  // eslint-disable-next-line valid-typeof
  if (isTypeString(type as string) && typeof target[key] !== (type as TypeString)) {
    return false;
  }
  if (typeof type === 'function' && (target[key] as unknown) instanceof type) {
    return false;
  }

  return true;
};

export const hasPropertiesAndTypes = <T extends object>(target: T, expected: { [K in keyof T]?: unknown }): boolean => {
  return Object.entries(expected).every(([key, type]) => {
    if (!Object.hasOwn(target, key)) {
      return false;
    }

    const k = key as keyof T;

    if (Array.isArray(type) && !type.some((t) => propertyHasType(target, k, t))) {
      return false;
    }

    return propertyHasType(target, k, type);
  });
};

export const isOfTypeAsset = <T extends object>(property: T) => {
  const assetType = {
    url: 'string',
    title: 'string',
  };

  return hasPropertiesAndTypes(property, assetType);
};
