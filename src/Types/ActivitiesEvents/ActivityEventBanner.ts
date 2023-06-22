import { Asset } from '../CommonTypes';
import { ContentfulActivityEventBannerResponse } from './ContentfulActivityEventResponses';
import { IActivityEventBanner } from './IActivityEventBanner';

export class ActivityEventBanner implements IActivityEventBanner {
  private readonly _thumbnail: Asset | null;

  private readonly _id: string;

  public constructor(src: ContentfulActivityEventBannerResponse) {
    this._thumbnail = src.thumbnail;
    this._id = src.sys.id;
  }

  public get id(): string {
    return this._id;
  }

  public get thumbnail(): Asset | null {
    return this._thumbnail;
  }
}
