export class IgcseCoursesPageSettings {
    constructor(src) {
        this._title = src.forIgcseCoursesPageTitle;
        this._body = src.forIgcseCoursesPageBody;
    }
    get title() {
        return this._title;
    }
    get body() {
        return this._body;
    }
}
