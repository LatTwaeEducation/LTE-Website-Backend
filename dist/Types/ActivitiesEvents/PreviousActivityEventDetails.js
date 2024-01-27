import { BaseActivityEventDetails } from './BaseActivityEventDetails';
export class PreviousActivityEventDetails extends BaseActivityEventDetails {
    _eventImages;
    _replayLink;
    _shareLink;
    constructor(src) {
        super(src);
        this._eventImages = src.eventImagesCollection.items.map(i => i.url);
        this._replayLink = src.replayLink ?? '';
        this._shareLink = src.shareLink ?? '';
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
