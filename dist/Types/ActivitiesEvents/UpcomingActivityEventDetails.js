import { format } from 'date-fns-tz';
import { BaseActivityEventDetails } from './BaseActivityEventDetails';
import { TimePattern } from '../CommonTypes';
export class UpcomingActivityEventDetails extends BaseActivityEventDetails {
    constructor(src) {
        var _a;
        super(src);
        this._registrationLink = (_a = src.registrationLink) !== null && _a !== void 0 ? _a : '';
    }
    get registrationLink() {
        return this._registrationLink;
    }
    get time() {
        return format(this._eventDateTime, TimePattern, { timeZone: this._timezone });
    }
}
