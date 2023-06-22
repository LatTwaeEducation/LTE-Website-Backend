import { BaseActivityEventCard } from './BaseActivityEventCard';
export class BaseActivityEventDetails extends BaseActivityEventCard {
    constructor(src) {
        var _a, _b;
        super(src);
        this._speaker = src.speaker;
        this._about = (_a = src.about) !== null && _a !== void 0 ? _a : '';
        this._topics = (_b = src.topics) !== null && _b !== void 0 ? _b : [];
    }
    get about() {
        return this._about;
    }
    get speaker() {
        return this._speaker;
    }
    get topics() {
        return this._topics;
    }
}
