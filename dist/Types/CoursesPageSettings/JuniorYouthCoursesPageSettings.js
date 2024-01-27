export class JuniorYouthCoursesPageSettings {
    constructor(src) {
        var _a, _b;
        this._title = src.forJuniorYouthCoursesPageTitle;
        this._roadmap = (_b = (_a = src.forJuniorYouthCoursesPageRoadmap) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : null;
        this._body = src.forJuniorYouthCoursesPageTitle;
    }
    get title() {
        return this._title;
    }
    get body() {
        return this._body;
    }
    get roadmap() {
        return this._roadmap;
    }
}
