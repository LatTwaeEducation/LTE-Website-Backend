export class EveryoneCoursesPageSettings {
    _title;
    _body;
    constructor(src) {
        this._title = src.forEveryoneCoursesPageTitle;
        this._body = src.forEveryoneCoursesPageBody;
    }
    get title() {
        return this._title;
    }
    get body() {
        return this._body;
    }
}
