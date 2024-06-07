import { PageSettingName } from './Data/Constraints';
import { CoursePageSetting } from './Data/CoursePageSetting';
export declare const getCourseColor: (settingName: PageSettingName) => Promise<CoursePageSetting | undefined>;
export declare const getCoursePageSettingId: (settingName: PageSettingName) => Promise<string | undefined>;
export declare const getCoursePageSettingById: (settingId: string) => Promise<CoursePageSetting>;
//# sourceMappingURL=CoursePageSettingRepository.d.ts.map