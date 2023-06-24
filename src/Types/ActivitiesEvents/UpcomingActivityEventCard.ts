import { IUpcomingActivityEventCard } from './IUpcomingActivityEventCard';
import { BaseActivityEventCard } from './BaseActivityEventCard';
import { ContentfulActivityEventCardResponse } from './ContentfulActivityEventResponses';

export class UpcomingActivityEventCard extends BaseActivityEventCard implements IUpcomingActivityEventCard {
  private readonly _registrationLink: string;

  constructor(src: ContentfulActivityEventCardResponse) {
    super(src);
    this._registrationLink = src.registrationLink ?? '';
  }

  get registrationLink(): string {
    return this._registrationLink;
  }
}
