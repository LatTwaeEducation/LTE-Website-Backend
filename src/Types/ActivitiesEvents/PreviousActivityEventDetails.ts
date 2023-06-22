import { BaseActivityEventDetails } from './BaseActivityEventDetails';
import { IPreviousActivityEventDetails } from './IPreviousActivityEventDetails';
import { ContentfulActivityEventResponse } from './ContentfulActivityEventResponses';
import { Asset } from '../CommonTypes';

export class PreviousActivityEventDetails extends BaseActivityEventDetails implements IPreviousActivityEventDetails {
  private readonly _eventImages: Asset[];

  private readonly _replayLink: string;

  private readonly _shareLink: string;

  constructor(src: ContentfulActivityEventResponse) {
    super(src);

    this._eventImages = src.eventImages ?? [];
    this._replayLink = src.replayLink ?? '';
    this._shareLink = src.shareLink ?? '';
  }

  public get eventImages(): Asset[] {
    return this._eventImages;
  }

  public get replayLink(): string {
    return this._replayLink;
  }

  public get shareLink(): string {
    return this._shareLink;
  }
}
