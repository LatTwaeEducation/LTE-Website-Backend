import { ContentfulUpcomingActivityEventCardResponse } from './ContentfulActivityEventResponses';
import { IUpcomingActivityEventCard } from './IUpcomingActivityEventCard';
import { BaseActivityEventCard } from './BaseActivityEventCard';

export class UpcomingActivityEventCard extends BaseActivityEventCard implements IUpcomingActivityEventCard {
  private readonly _registrationLink: string;

  constructor(src: ContentfulUpcomingActivityEventCardResponse) {
    super(src);
    this._registrationLink = src.registrationLink ?? '';
  }

  get registrationLink(): string {
    return this._registrationLink;
  }
}
