import { Event } from "@domain/models/event"

export type EventRepository = {
  create(event: Omit<Event, "id">): Promise<Event>;
  getAllEvents(): Promise<Event[]>;
  getEventsByRegion(region: string): Promise<Event[]>;
};
