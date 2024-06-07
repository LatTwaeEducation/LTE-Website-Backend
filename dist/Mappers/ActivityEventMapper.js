import { formatDateString, formatDateTimeWithTimezone } from "../Helpers/Humaniser";
export const mapToPreviousEventCard = (src) => {
    return {
        id: src.sys.id,
        name: src.name,
        dateTime: src.eventDateAndTimeCollection.items.map((item) => formatDateString(item.dateTime)).join(', '),
        replayLink: src.replayLink,
        thumbnail: src.thumbnail?.url,
    };
};
export const mapToUpcomingEventCard = (src) => {
    return {
        id: src.sys.id,
        name: src.name,
        dateTime: src.eventDateAndTimeCollection.items.map((item) => formatDateString(item.dateTime)).join(', '),
        registrationLink: src.registrationLink,
        thumbnail: src.thumbnail?.url,
    };
};
export const mapToBanner = (src) => {
    return {
        id: src.sys.id,
        thumbnail: src.thumbnail?.url,
    };
};
export const mapEventDetails = (src) => {
    return {
        id: src.sys.id,
        about: src.about,
        eventImages: src.eventImagesCollection.items.map((item) => item.url),
        isCancelled: src.isCancelled,
        shareLink: src.shareLink,
        speaker: src.speaker,
        isUpcoming: src.eventDateAndTimeCollection.items.some((item) => new Date(item.dateTime) > new Date()),
        name: src.name,
        topics: src.topics ?? [],
        thumbnail: src.thumbnail?.url,
        dateTime: src.eventDateAndTimeCollection.items.map((item) => formatDateTimeWithTimezone(item.dateTime)).join(' | '),
        registrationLink: src.registrationLink,
        replayLink: src.replayLink,
    };
};
