import { Event } from "@domain/models/event";
import { EventRepository } from "@domain/repositories/eventRepository";

export class MissingParam extends Error {
  constructor(param: string) {
    super(`Missing parameter: ${param}`);
  }
}

type GetEventsByRegionInput = {
  region?: string;
};

export class GetEventsByRegion {
  constructor(
    private eventRepository: EventRepository
  ) { }

  async execute(input: GetEventsByRegionInput): Promise<Event[]> {
    const { region } = input;

    if (!region) throw new MissingParam("title");

    const events = await this.eventRepository.getEventsByRegion(region);
    return events;
  }
}
