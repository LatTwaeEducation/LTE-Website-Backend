export class ActivityEventBanner {
    _thumbnail;
    _id;
    constructor(src) {
        this._thumbnail = src.thumbnail?.url ?? null;
        this._id = src.sys.id;
    }
    get id() {
        return this._id;
    }
    get thumbnail() {
        return this._thumbnail;
    }
}
