import { BaseActivityEventCard } from './BaseActivityEventCard';
export class PreviousActivityEventCard extends BaseActivityEventCard {
    constructor(src) {
        var _a;
        super(src);
        this._replayLink = (_a = src.replayLink) !== null && _a !== void 0 ? _a : '';
    }
    get replayLink() {
        return this._replayLink;
    }
}
