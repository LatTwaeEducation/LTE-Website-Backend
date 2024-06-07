import { parseISO } from 'date-fns';
import { format } from 'date-fns-tz';
const DatePattern = 'dd LLL yyyy';
const DateTimePattern = 'pppp (z) ';
const weekHumaniser = (duration, hoursPerWeek) => {
    const weeks = Math.round(duration / hoursPerWeek);
    const weekString = weeks > 1 ? 'weeks' : 'week';
    return `${weeks} ${weekString}`;
};
const hourHumaniser = (duration) => {
    const hourString = duration > 1 ? 'hours' : 'hour';
    return `${duration} ${hourString}`;
};
export const getDurationString = (duration, hoursPerWeek) => `${hourHumaniser(duration)} / ${weekHumaniser(duration, hoursPerWeek)}`;
export const formatDateTimeWithTimezone = (src, dateTimePattern = DateTimePattern) => {
    const time = typeof src === 'string' ? parseISO(src) : src;
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    return format(time, dateTimePattern, { timeZone });
};
export const formatDateString = (src, datePattern = DatePattern) => {
    const time = typeof src === 'string' ? parseISO(src) : src;
    return format(time, datePattern);
};
export const getCourseGroupTitle = (courseCategory, courses) => {
    const title = `Courses for ${courseCategory}`;
    if (courses.length > 0) {
        const minimumAge = Math.min(...courses.map((c) => c.fromAge));
        const maximumAge = Math.max(...courses.map((c) => c.toAge));
        return `${title} (${minimumAge} - ${maximumAge})`;
    }
    return title;
};
