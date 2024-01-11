import { BaseCourse } from './BaseCourse';
export class CourseDetails extends BaseCourse {
    constructor(src) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        super(src);
        this._featuredImage = (_b = (_a = src.featuredImage) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : null;
        this._learningPlatforms = (_d = (_c = src.learningPlatforms) === null || _c === void 0 ? void 0 : _c.join(', ')) !== null && _d !== void 0 ? _d : '';
        this._price = src.price;
        this._requirements = (_e = src.requirements) !== null && _e !== void 0 ? _e : '';
        this._languages = (_g = (_f = src.languages) === null || _f === void 0 ? void 0 : _f.join(', ')) !== null && _g !== void 0 ? _g : '';
        this._classDescription = (_h = src.classDescription) !== null && _h !== void 0 ? _h : '';
        this._skillsYouWillGain = (_j = src.skillsYouWillGain) !== null && _j !== void 0 ? _j : [];
        this._whatWillYouLearn = (_l = (_k = src.whatWillYouLearn) === null || _k === void 0 ? void 0 : _k.trim().split('\n')) !== null && _l !== void 0 ? _l : [];
        this._courseDescription = (_o = (_m = src.courseDescription) === null || _m === void 0 ? void 0 : _m.trim().split('\n')) !== null && _o !== void 0 ? _o : [];
        this._continuousLearning = (_q = (_p = src.continuousLearning) === null || _p === void 0 ? void 0 : _p.trim().split('\n')) !== null && _q !== void 0 ? _q : [];
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
