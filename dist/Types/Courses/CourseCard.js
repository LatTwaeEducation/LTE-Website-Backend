import { BaseCourse } from './BaseCourse';
export class CourseCard extends BaseCourse {
    _thumbnail;
    constructor(src) {
        super(src);
        this._thumbnail = src.thumbnail?.url ?? null;
    }
    get thumbnail() {
        return this._thumbnail;
    }
}
