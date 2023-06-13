export class AllCoursesColourSettings {
    constructor(src) {
        this._juniorColour = src.forJuniorCoursesColour;
        this._youthColour = src.forYouthCoursesColour;
        this._everyoneColour = src.forEveryoneCoursesColour;
        this._igcseColour = src.forIgcseCoursesColour;
    }
    get igcseCoursesColour() {
        return this._igcseColour;
    }
    get juniorCoursesColour() {
        return this._juniorColour;
    }
    get youthCoursesColour() {
        return this._youthColour;
    }
    get everyoneCoursesColour() {
        return this._everyoneColour;
    }
}
