import { BaseSys } from '../Contentful/CommonTypes';

type ContentfulLocaleTypeEnUs<T> = {
  'en-US': T;
};

export interface ContentfulContactMessageRequest {
  fields: {
    fullName: ContentfulLocaleTypeEnUs<string>;
    email: ContentfulLocaleTypeEnUs<string>;
    phone?: ContentfulLocaleTypeEnUs<string>;
    message: ContentfulLocaleTypeEnUs<string>;
  };
}

export interface ContentfulContactMessageResponse {
  sys: BaseSys;
  fields: ContentfulContactMessageRequest;
}
