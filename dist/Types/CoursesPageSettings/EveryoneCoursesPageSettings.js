export class EveryoneCoursesPageSettings {
    constructor(src) {
        this._colour = src.forEveryoneCoursesColour;
        this._title = src.forEveryoneCoursesPageTitle;
    }
    get everyoneCoursesColour() {
        return this._colour;
    }
    get title() {
        return this._title;
    }
}
