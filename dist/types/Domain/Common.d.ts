export type AssetTextBody = {
    images: string[];
    paragraphs: string[];
};
export interface Partnership {
    logo: string;
    company: string;
}
export interface Testimonial {
    name: string;
    feedback: string;
    occupation: string;
}
export type Tag = {
    id: string;
    name: string;
};
export type ClassCategory = 'Junior' | 'Youth' | 'Everyone' | 'Igcse';
export interface SocialMediaLinks {
    facebookLink?: string;
    facebookGroupLink?: string;
    instagramLink?: string;
    youtubeLink?: string;
    telegramLink?: string;
    twitterLink?: string;
    linkedinLink?: string;
}
export interface AppLinks {
    googlePlayLink?: string;
    appStoreLink?: string;
}
export interface FooterContent extends SocialMediaLinks, AppLinks {
    aboutUs: string;
    phoneNumbers?: string[];
    emailAddresses?: string[];
}
export interface CountStats {
    name: 'Classes' | 'Members' | 'Students';
    count: number;
    message?: string;
}
interface Mission {
    mission: string;
    missionImage?: string;
}
interface Vision {
    vision: string;
    visionImage?: string;
}
export type MissionVision = Mission & Vision;
export {};
//# sourceMappingURL=Common.d.ts.map