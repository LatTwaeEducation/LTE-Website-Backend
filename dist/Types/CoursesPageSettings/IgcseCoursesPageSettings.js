export class IgcseCoursesPageSettings {
    constructor(src) {
        this._colour = src.forIgcseCoursesColour;
        this._title = src.forIgcseCoursesPageTitle;
        this._body = src.forIgcseCoursesPageBody;
    }
    get igcseCoursesColour() {
        return this._colour;
    }
    get title() {
        return this._title;
    }
    get body() {
        return this._body;
    }
}
