import { BaseActivityEventCard } from './BaseActivityEventCard';
export class UpcomingActivityEventCard extends BaseActivityEventCard {
    constructor(src) {
        var _a;
        super(src);
        this._registrationLink = (_a = src.registrationLink) !== null && _a !== void 0 ? _a : '';
    }
    get registrationLink() {
        return this._registrationLink;
    }
}
