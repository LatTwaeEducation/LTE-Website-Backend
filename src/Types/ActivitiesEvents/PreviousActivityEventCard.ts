import { IPreviousActivityEventCard } from './IPreviousActivityEventCard';
import { BaseActivityEventCard } from './BaseActivityEventCard';
import { ContentfulActivityEventCardResponse } from './ContentfulActivityEventResponses';

export class PreviousActivityEventCard extends BaseActivityEventCard implements IPreviousActivityEventCard {
  private readonly _replayLink: string;

  constructor(src: ContentfulActivityEventCardResponse) {
    super(src);
    this._replayLink = src.replayLink ?? '';
  }

  get replayLink() {
    return this._replayLink;
  }
}
