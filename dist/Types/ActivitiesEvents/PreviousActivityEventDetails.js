import { BaseActivityEventDetails } from './BaseActivityEventDetails';
export class PreviousActivityEventDetails extends BaseActivityEventDetails {
    constructor(src) {
        var _a, _b;
        super(src);
        this._eventImages = src.eventImagesCollection.items;
        this._replayLink = (_a = src.replayLink) !== null && _a !== void 0 ? _a : '';
        this._shareLink = (_b = src.shareLink) !== null && _b !== void 0 ? _b : '';
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
