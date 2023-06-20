import { BaseCourse } from './BaseCourse';
export class CourseDetails extends BaseCourse {
    constructor(src) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        super(src);
        this._featuredImage = src.featuredImage;
        this._learningPlatforms = (_b = (_a = src.learningPlatforms) === null || _a === void 0 ? void 0 : _a.join(', ')) !== null && _b !== void 0 ? _b : '';
        this._price = src.price;
        this._requirements = (_c = src.requirements) !== null && _c !== void 0 ? _c : '';
        this._languages = (_e = (_d = src.languages) === null || _d === void 0 ? void 0 : _d.join(', ')) !== null && _e !== void 0 ? _e : '';
        this._classDescription = (_f = src.classDescription) !== null && _f !== void 0 ? _f : '';
        this._skillsYouWillGain = (_g = src.skillsYouWillGain) !== null && _g !== void 0 ? _g : [];
        this._whatWillYouLearn = (_j = (_h = src.whatWillYouLearn) === null || _h === void 0 ? void 0 : _h.trim().split('\n')) !== null && _j !== void 0 ? _j : [];
        this._courseDescription = (_l = (_k = src.courseDescription) === null || _k === void 0 ? void 0 : _k.trim().split('\n')) !== null && _l !== void 0 ? _l : [];
        this._continuousLearning = (_o = (_m = src.continuousLearning) === null || _m === void 0 ? void 0 : _m.trim().split('\n')) !== null && _o !== void 0 ? _o : [];
    }
    get featuredImage() {
        return this._featuredImage;
    }
    get learningPlatforms() {
        return this._learningPlatforms;
    }
    get price() {
        return this._price;
    }
    get requirements() {
        return this._requirements;
    }
    get languages() {
        return this._languages;
    }
    get classDescription() {
        return this._classDescription;
    }
    get skillsYouWillGain() {
        return this._skillsYouWillGain;
    }
    get whatWillYouLearn() {
        return this._whatWillYouLearn;
    }
    get courseDescription() {
        return this._courseDescription;
    }
    get continuousLearning() {
        return this._continuousLearning;
    }
}
