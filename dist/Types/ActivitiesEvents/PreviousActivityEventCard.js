import { BaseActivityEventCard } from './BaseActivityEventCard';
export class PreviousActivityEventCard extends BaseActivityEventCard {
    _replayLink;
    constructor(src) {
        super(src);
        this._replayLink = src.replayLink ?? '';
    }
    get replayLink() {
        return this._replayLink;
    }
}
