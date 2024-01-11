import { BaseCourse } from './BaseCourse';
export class CourseCard extends BaseCourse {
    constructor(src) {
        var _a, _b;
        super(src);
        this._thumbnail = (_b = (_a = src.thumbnail) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : null;
    }
    get thumbnail() {
        return this._thumbnail;
    }
}
