import { format } from 'date-fns-tz';
import { BaseActivityEventDetails } from './BaseActivityEventDetails';
import { IUpcomingActivityEventDetails } from './IUpcomingActivityEventDetails';
import { ContentfulActivityEventResponse } from './ContentfulActivityEventResponses';
import { TimePattern } from '../CommonTypes';

export class UpcomingActivityEventDetails extends BaseActivityEventDetails implements IUpcomingActivityEventDetails {
  private readonly _registrationLink: string;

  constructor(src: ContentfulActivityEventResponse) {
    super(src);

    this._registrationLink = src.registrationLink ?? '';
  }

  get registrationLink(): string {
    return this._registrationLink;
  }

  get time(): string {
    return format(this._eventDateTime, TimePattern, { timeZone: this._timezone });
  }
}
