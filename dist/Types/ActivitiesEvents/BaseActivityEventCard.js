import { format } from 'date-fns-tz';
import { ActivityEventBanner } from './ActivityEventBanner';
import { DatePattern } from '../CommonTypes';
export class BaseActivityEventCard extends ActivityEventBanner {
    constructor(src) {
        super(src);
        this._timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this._eventDateTime = new Date(src.eventDateTime);
        this._name = src.name;
    }
    get date() {
        return format(this._eventDateTime, DatePattern, { timeZone: this._timezone });
    }
    get name() {
        return this._name;
    }
}
