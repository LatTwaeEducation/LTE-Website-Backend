export type ClassCategory = 'Junior' | 'Youth' | 'Everyone' | 'IGCSE';
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
export interface CourseCard extends BaseCourse {
    id: string;
    duration: number;
    students: number;
    classCategory: ClassCategory;
    thumbnail: Asset;
}
export interface Course extends Omit<CourseCard, 'thumbnail'> {
    featureImage?: Asset;
    price: number;
    requirements?: string[];
    learningPlatforms: string[];
    skills: string[];
    whatYouLearn: string;
    whatWeTeach: string;
    futherLearning: string;
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
export interface InfographicTimeline {
    startDate: Date;
    endDate?: Date;
    description: string;
}
//# sourceMappingURL=types.d.ts.map