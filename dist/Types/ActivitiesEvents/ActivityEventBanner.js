export class ActivityEventBanner {
    constructor(src) {
        var _a, _b;
        this._thumbnail = (_b = (_a = src.thumbnail) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : null;
        this._id = src.sys.id;
    }
    get id() {
        return this._id;
    }
    get thumbnail() {
        return this._thumbnail;
    }
}
