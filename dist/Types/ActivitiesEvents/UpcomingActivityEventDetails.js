import { format } from 'date-fns-tz';
import { BaseActivityEventDetails } from './BaseActivityEventDetails';
import { TimePattern } from '../CommonTypes';
export class UpcomingActivityEventDetails extends BaseActivityEventDetails {
    _registrationLink;
    constructor(src) {
        super(src);
        this._registrationLink = src.registrationLink ?? '';
    }
    get registrationLink() {
        return this._registrationLink;
    }
    get time() {
        return format(this._eventDateTime, TimePattern, { timeZone: this._timezone });
    }
}
