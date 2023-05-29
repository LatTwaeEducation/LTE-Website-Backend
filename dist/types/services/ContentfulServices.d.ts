import type { ContactMessage } from '../types';
interface ContentfulTag {
    sys: {
        id: string;
    };
    name: string;
}
export declare const getAllTags: () => Promise<ContentfulTag[]>;
export declare const queryData: <T>(queryString: string, queryVariables?: object) => Promise<T>;
export declare const postMessage: (message: ContactMessage) => Promise<any>;
export {};
//# sourceMappingURL=ContentfulServices.d.ts.map