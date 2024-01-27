import EventCards from '../../Services/EventCards';
export default async () => (await EventCards({ upcomingOrPrevious: 'upcoming' }));
