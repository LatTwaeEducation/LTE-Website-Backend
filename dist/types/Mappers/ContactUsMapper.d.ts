import { PostMessageRequest } from "../Persistence/Data/ContactFormSubmission";
import { ContactInfo as DbObjContactInfo } from "../Persistence/Data/ContactInfo";
import { ContactFormSubmission, ContactInfo as DomainContactInfo } from "../Domain/ContactUs";
export declare const mapContactFormSubmission: (src: ContactFormSubmission) => PostMessageRequest;
export declare const mapContactUs: (src: DbObjContactInfo) => DomainContactInfo;
//# sourceMappingURL=ContactUsMapper.d.ts.map