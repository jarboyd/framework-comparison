import { Event } from "@domain/models/event";

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { EventRepository } from "@domain/repositories/eventRepository";

@Entity({ name: "event" })
export class TypeormEvent extends BaseEntity implements Event {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  region!: string;
};

export class TypeormEventRepository implements EventRepository {
  async create(event: Omit<Event, "id">): Promise<Event> {
    const eventRepository = TypeormEvent.getRepository();
    const newEvent = eventRepository.create(event);
    return eventRepository.save(newEvent);
  }

  async getAllEvents(): Promise<Event[]> {
    const eventRepository = TypeormEvent.getRepository();
    return eventRepository.find();
  }

  async getEventsByRegion(region: string): Promise<Event[]> {
    const eventRepository = TypeormEvent.getRepository();
    const events = await eventRepository.find({ where: { region } });
    return eventRepository.save(events);
  }
}
