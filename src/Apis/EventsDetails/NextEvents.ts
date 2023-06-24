import EventCards from '../../Services/EventCards';

const DEFAULT_SKIP = 0;
const DEFAULT_LIMIT = 2;

export default async (skip = DEFAULT_SKIP, limit = DEFAULT_LIMIT) => EventCards({ skip, limit });
