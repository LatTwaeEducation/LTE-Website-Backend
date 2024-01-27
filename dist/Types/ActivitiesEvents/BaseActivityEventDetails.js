import { BaseActivityEventCard } from './BaseActivityEventCard';
export class BaseActivityEventDetails extends BaseActivityEventCard {
    _speaker;
    _about;
    _topics;
    constructor(src) {
        super(src);
        this._speaker = src.speaker;
        this._about = src.about ?? '';
        this._topics = src.topics ?? [];
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
