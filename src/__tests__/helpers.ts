import { Asset } from '../Types/CommonTypes';
import { ContentfulContactMessageRequest } from '../Types/ContactMessages/ContentfulContactMessage';

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

export const dateStringRegex = /^(0[1-9]|[12][0-9]|3[01])\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}$/;

export const expectAssetObject = expect.objectContaining({
  url: expect.any(String),
  title: expect.any(String),
});

export const wrapContentfulPostResponse = (src: ContentfulContactMessageRequest) => {
  return {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'gxxheul7hh8o',
        },
      },
      id: '2njJdACPuumKjae2b825Ko',
      type: 'Entry',
      createdAt: '2023-06-06T08:16:23.867Z',
      updatedAt: '2023-06-06T08:16:23.867Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      createdBy: {
        sys: {
          type: 'Link',
          linkType: 'User',
          id: '0XzjJ8kLQzI5HFamo5kuEA',
        },
      },
      updatedBy: {
        sys: {
          type: 'Link',
          linkType: 'User',
          id: '0XzjJ8kLQzI5HFamo5kuEA',
        },
      },
      publishedCounter: 0,
      version: 1,
      automationTags: [],
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'contactFormSubmission',
        },
      },
    },
    ...src,
  };
};
