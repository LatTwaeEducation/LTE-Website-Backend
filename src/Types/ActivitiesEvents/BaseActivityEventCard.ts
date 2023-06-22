import { format } from 'date-fns-tz';
import { ActivityEventBanner } from './ActivityEventBanner';
import { IActivityEventCard } from './IActivityEventCard';
import { ContentfulBaseActivityEventCardResponse } from './ContentfulActivityEventResponses';
import { DatePattern } from '../CommonTypes';

export abstract class BaseActivityEventCard extends ActivityEventBanner implements IActivityEventCard {
  protected readonly _eventDateTime: Date;

  private readonly _name: string;

  protected readonly _timezone: string;

  protected constructor(src: ContentfulBaseActivityEventCardResponse) {
    super(src);

    this._timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    this._eventDateTime = new Date(src.eventDateTime);
    this._name = src.name;
  }

  get date(): string {
    return format(this._eventDateTime, DatePattern, { timeZone: this._timezone });
  }

  get name(): string {
    return this._name;
  }
}
