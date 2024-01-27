import { BaseActivityEventCard } from './BaseActivityEventCard';
export class UpcomingActivityEventCard extends BaseActivityEventCard {
    _registrationLink;
    constructor(src) {
        super(src);
        this._registrationLink = src.registrationLink ?? '';
    }
    get registrationLink() {
        return this._registrationLink;
    }
}
