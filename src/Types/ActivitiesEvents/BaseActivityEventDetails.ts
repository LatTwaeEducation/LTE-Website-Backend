import { IActivityEventDetails } from './IActivityEventDetails';
import { BaseActivityEventCard } from './BaseActivityEventCard';
import { ContentfulActivityEventResponse } from './ContentfulActivityEventResponses';

export abstract class BaseActivityEventDetails extends BaseActivityEventCard implements IActivityEventDetails {
  private readonly _speaker: string;

  private readonly _about: string;

  private readonly _topics: string[];

  protected constructor(src: ContentfulActivityEventResponse) {
    super(src);

    this._speaker = src.speaker;
    this._about = src.about ?? '';
    this._topics = src.topics ?? [];
  }

  public get about(): string {
    return this._about;
  }

  public get speaker(): string {
    return this._speaker;
  }

  public get topics(): string[] {
    return this._topics;
  }
}
