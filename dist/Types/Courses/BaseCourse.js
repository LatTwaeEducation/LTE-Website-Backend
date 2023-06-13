export class BaseCourse {
    constructor(src) {
        this._id = src.sys.id;
        this._name = src.name;
        this._fromAge = src.fromAge;
        this._toAge = src.toAge;
        this._duration = src.duration;
        this._hoursPerWeek = src.hoursPerWeek;
        this._students = src.students;
        this._classCategory = src.classCategory;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get age() {
        return `${this._fromAge} - ${this._toAge}`;
    }
    get duration() {
        return this.generateDurationString();
    }
    get students() {
        return this._students;
    }
    get classCategory() {
        return this._classCategory;
    }
    weekHumaniser() {
        const weeks = Math.round(this._duration / this._hoursPerWeek);
        const weekString = weeks > 1 ? 'weeks' : 'week';
        return `${weeks} ${weekString}`;
    }
    hourHumaniser() {
        const hourString = this._duration > 1 ? 'hours' : 'hour';
        return `${this._duration} ${hourString}`;
    }
    generateDurationString() {
        return `${this.hourHumaniser()} / ${this.weekHumaniser()}`;
    }
}
