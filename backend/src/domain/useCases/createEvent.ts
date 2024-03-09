import { Event } from "@domain/models/event";
import { EventRepository } from "@domain/repositories/eventRepository";
import { TitleValidator } from "@domain/validation/titleValidator";

export class MissingParam extends Error {
  constructor(param: string) {
    super(`Missing parameter: ${param}`);
  }
}

export class InvalidTitleError extends Error {
  constructor() {
    super("Invalid title!");
  }
}

type CreateEventInput = {
  title?: string;
  description?: string;
  region?: string;
};

export class CreateEvent {
  constructor(
    private eventRepository: EventRepository,
    private titleValidator: TitleValidator
  ) { }

  async execute(input: CreateEventInput): Promise<Event> {
    const { title, description, region } = input;

    if (!title) throw new MissingParam("title");
    if (!description) throw new MissingParam("description");
    if (!region) throw new MissingParam("region");

    const isValid = this.titleValidator.validate(title);
    if (!isValid)
      throw new InvalidTitleError();

    const newEvent = await this.eventRepository.create({ title, description, region });
    return newEvent;
  }
}
