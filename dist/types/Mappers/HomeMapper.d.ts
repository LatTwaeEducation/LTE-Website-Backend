import { AppAdvertisement as DbObjectAppAds } from "../Persistence/Data/ApplicationAdvertisement";
import { HomeTopBanner as DbObjectBanner } from "../Persistence/Data/HomeTopBanner";
import { Partnership as DbObjectPartnership } from "../Persistence/Data/Partnership";
import { Testimonial as DbObjectTestimonial } from "../Persistence/Data/Testimonial";
import { Partnership as DomainPartnership, Testimonial as DomainTestimonial } from "../Domain/Common";
import { AppAdvertisement as DomainAppAds, HomeTopBanner as DomainBanner } from "../Domain/Home";
export declare const mapHomeTopBanner: (src: DbObjectBanner) => DomainBanner;
export declare const mapPartnership: (src: DbObjectPartnership) => DomainPartnership;
export declare const mapTestimonial: (src: DbObjectTestimonial) => DomainTestimonial;
export declare const mapAppAds: (src: DbObjectAppAds) => DomainAppAds;
//# sourceMappingURL=HomeMapper.d.ts.map