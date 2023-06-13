export class JuniorYouthCoursesPageSettings {
    constructor(src) {
        this._juniorColour = src.forJuniorCoursesColour;
        this._youthColour = src.forYouthCoursesColour;
        this._title = src.forJuniorYouthCoursesPageTitle;
        this._roadmap = src.forJuniorYouthCoursesPageRoadmap;
    }
    get juniorCoursesColour() {
        return this._juniorColour;
    }
    get youthCoursesColour() {
        return this._youthColour;
    }
    get title() {
        return this._title;
    }
    get roadmap() {
        return this._roadmap;
    }
}
