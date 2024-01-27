export class JuniorYouthCoursesPageSettings {
    _title;
    _body;
    _roadmap;
    constructor(src) {
        this._title = src.forJuniorYouthCoursesPageTitle;
        this._roadmap = src.forJuniorYouthCoursesPageRoadmap?.url ?? null;
        this._body = src.forJuniorYouthCoursesPageBody;
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
