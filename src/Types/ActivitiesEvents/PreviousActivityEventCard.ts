import { IPreviousActivityEventCard } from './IPreviousActivityEventCard';
import { ContentfulPreviousActivityEventCardResponse } from './ContentfulActivityEventResponses';
import { BaseActivityEventCard } from './BaseActivityEventCard';

export class PreviousActivityEventCard extends BaseActivityEventCard implements IPreviousActivityEventCard {
  private readonly _replayLink: string;

  constructor(src: ContentfulPreviousActivityEventCardResponse) {
    super(src);
    this._replayLink = src.replayLink ?? '';
  }

  get replayLink() {
    return this._replayLink;
  }
}
