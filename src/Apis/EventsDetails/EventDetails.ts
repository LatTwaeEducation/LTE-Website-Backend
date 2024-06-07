import { EventDetails } from '@domain/ActivityEvent';
import { mapEventDetails } from '@mappers/ActivityEventMapper';
import { getActivityEventById } from '@persistence/ActivityEventRepository';

export default async (eventId: string): Promise<EventDetails> => {
  const response = await getActivityEventById(eventId);
  return mapEventDetails(response);
};
