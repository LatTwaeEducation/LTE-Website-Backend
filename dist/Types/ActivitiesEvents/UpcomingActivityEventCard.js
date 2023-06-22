import { BaseActivityEventCard } from './BaseActivityEventCard';
export class UpcomingActivityEventCard extends BaseActivityEventCard {
    constructor(src) {
        var _a;
        super(src);
        this._registerLink = (_a = src.registerLink) !== null && _a !== void 0 ? _a : '';
    }
    get registerLink() {
        return this._registerLink;
    }
}
