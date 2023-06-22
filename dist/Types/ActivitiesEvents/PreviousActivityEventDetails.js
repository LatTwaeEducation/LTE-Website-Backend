import { BaseActivityEventDetails } from './BaseActivityEventDetails';
export class PreviousActivityEventDetails extends BaseActivityEventDetails {
    constructor(src) {
        var _a, _b, _c;
        super(src);
        this._eventImages = (_a = src.eventImages) !== null && _a !== void 0 ? _a : [];
        this._replayLink = (_b = src.replayLink) !== null && _b !== void 0 ? _b : '';
        this._shareLink = (_c = src.shareLink) !== null && _c !== void 0 ? _c : '';
    }
    get eventImages() {
        return this._eventImages;
    }
    get replayLink() {
        return this._replayLink;
    }
    get shareLink() {
        return this._shareLink;
    }
}
