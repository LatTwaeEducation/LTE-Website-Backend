import { AppLinks, Partnership, Testimonial } from './Common';
export interface HomeTopBanner {
    title: string;
    body: string;
    learnMoreLink?: string;
}
export interface PartnershipGroup {
    partnerships: Partnership[];
    partnershipFormLink?: string;
}
export interface TestimonialGroup {
    testimonials: Testimonial[];
    recruitmentFormLink?: string;
}
export interface AllCoursesAndSettings {
    juniorCourses: string[];
    youthCourses: string[];
    everyoneCourses: string[];
    igcseCourses: string[];
    everyoneCoursesColour: string;
    igcseCoursesColour: string;
    juniorCoursesColour: string;
    youthCoursesColour: string;
}
export interface AppAdvertisement extends AppLinks {
    featureImage?: string;
    title: string;
    body: string;
}
//# sourceMappingURL=Home.d.ts.map