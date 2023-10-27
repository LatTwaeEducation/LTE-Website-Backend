export class JuniorYouthCoursesPageSettings {
    constructor(src) {
        this._title = src.forJuniorYouthCoursesPageTitle;
        this._roadmap = src.forJuniorYouthCoursesPageRoadmap;
    }
    get title() {
        return this._title;
    }
    get roadmap() {
        return this._roadmap;
    }
}
