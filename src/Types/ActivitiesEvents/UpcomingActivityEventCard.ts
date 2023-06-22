import { ContentfulUpcomingActivityEventCardResponse } from './ContentfulActivityEventResponses';
import { IUpcomingActivityEventCard } from './IUpcomingActivityEventCard';
import { BaseActivityEventCard } from './BaseActivityEventCard';

export class UpcomingActivityEventCard extends BaseActivityEventCard implements IUpcomingActivityEventCard {
  private readonly _registerLink: string;

  constructor(src: ContentfulUpcomingActivityEventCardResponse) {
    super(src);
    this._registerLink = src.registerLink ?? '';
  }

  get registerLink(): string {
    return this._registerLink;
  }
}
