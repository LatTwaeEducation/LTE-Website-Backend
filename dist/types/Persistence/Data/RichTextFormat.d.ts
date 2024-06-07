import { Document } from '@contentful/rich-text-types';
import { BaseSys } from './Common';
type LinkObject = {
    block?: object;
    hyperlink?: object;
    inline?: object;
};
type AssetsLinkObject = {
    sys?: BaseSys;
    url?: string;
    title?: string;
};
type AssetsLink = {
    block?: AssetsLinkObject[];
    hyperlink?: AssetsLinkObject[];
};
export type EntriesLinkObject = LinkObject;
export type ResourcesLinkObject = LinkObject;
export type RichText = {
    json: Document;
    links?: {
        assets?: AssetsLink;
        entries?: EntriesLinkObject;
        resources?: ResourcesLinkObject;
    };
};
export {};
//# sourceMappingURL=RichTextFormat.d.ts.map