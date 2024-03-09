import { GetAllEvents } from "@domain/useCases/getAllEvents";
import { TypeormEventRepository } from "@infra/repositories/eventRepository/typeorm";
import { Request, Response, Router } from "express";

const typeormEventRepository = new TypeormEventRepository();

const getAllEvents = new GetAllEvents(typeormEventRepository);

const router = Router();

router.get("/events", async (_req: Request, res: Response) => {
  try {
    const events = await getAllEvents.execute();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

export default router;
