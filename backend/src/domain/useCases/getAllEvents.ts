import { Event } from "@domain/models/event";
import { EventRepository } from "@domain/repositories/eventRepository";

export class GetAllEvents {
  constructor(
    private eventRepository: EventRepository
  ) { }

  async execute(): Promise<Event[]> {
    const events = await this.eventRepository.getAllEvents();
    return events;
  }
}
