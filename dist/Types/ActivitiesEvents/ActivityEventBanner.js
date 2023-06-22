export class ActivityEventBanner {
    constructor(src) {
        this._thumbnail = src.thumbnail;
        this._id = src.sys.id;
    }
    get id() {
        return this._id;
    }
    get thumbnail() {
        return this._thumbnail;
    }
}
