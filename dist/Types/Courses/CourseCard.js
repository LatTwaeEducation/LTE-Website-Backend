import { BaseCourse } from './BaseCourse';
export class CourseCard extends BaseCourse {
    constructor(src) {
        super(src);
        this._thumbnail = src.thumbnail;
    }
    get thumbnail() {
        return this._thumbnail;
    }
}
