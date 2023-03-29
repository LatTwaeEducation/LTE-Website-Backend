export interface Asset {
    title: string;
    url: string;
}
export interface Sys {
    id: string;
    publishAt?: Date;
}
export interface BaseCourse {
    name: string;
}
export interface Testimonial {
    feedback: string;
    name: string;
    occupation: string;
}
export interface Partnership {
    logo: Asset;
    company: string;
}
export interface BlogCard {
    id: string;
    thumbnail: Asset;
    title: string;
    publishedAt: Date;
    description: string;
}
export type Links = {
    assets: {
        block: Asset & Sys;
    };
};
export interface BaseActivityEvent {
    id: string;
    thumbnail: Asset;
}
//# sourceMappingURL=types.d.ts.map