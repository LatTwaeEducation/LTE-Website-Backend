export class AllCoursesAndSettings {
    constructor(coursesAndSettings) {
        this._igcseCourses = coursesAndSettings.igcseCourses.items.map((course) => course.name);
        this._everyoneCourses = coursesAndSettings.everyoneCourses.items.map((course) => course.name);
        this._juniorCourses = coursesAndSettings.juniorCourses.items.map((course) => course.name);
        this._youthCourses = coursesAndSettings.youthCourses.items.map((course) => course.name);
        this._igcseColour = coursesAndSettings.forIgcseCoursesColour;
        this._everyoneColour = coursesAndSettings.forEveryoneCoursesColour;
        this._juniorColour = coursesAndSettings.forJuniorCoursesColour;
        this._youthColour = coursesAndSettings.forYouthCoursesColour;
    }
    get juniorCourses() {
        return this._juniorCourses;
    }
    get youthCourses() {
        return this._youthCourses;
    }
    get everyoneCourses() {
        return this._everyoneCourses;
    }
    get igcseCourses() {
        return this._igcseCourses;
    }
    get everyoneCoursesColour() {
        return this._everyoneColour;
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
}
