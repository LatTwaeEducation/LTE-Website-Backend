export interface ActivityEventBanner {
  id: string;
  thumbnail?: string;
}

interface BaseActivityEventCard extends ActivityEventBanner {
  dateTime?: string;
  name?: string;
}

export interface PreviousActivityEventCard extends BaseActivityEventCard {
  replayLink?: string;
}

export interface UpcomingActivityEventCard extends BaseActivityEventCard {
  registrationLink?: string;
}

export interface EventDetails extends PreviousActivityEventCard, UpcomingActivityEventCard {
  isCancelled: boolean;
  isUpcoming: boolean;
  about?: string;
  speaker: string;
  topics: string[];
  eventImages: string[];
  shareLink?: string;
}
