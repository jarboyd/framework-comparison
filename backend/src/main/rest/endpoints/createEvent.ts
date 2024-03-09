import { Router, Request, Response } from "express";

import { CreateEvent, MissingParam, InvalidTitleError } from "@domain/useCases/createEvent";
import { TypeormEventRepository } from "@infra/repositories/eventRepository/typeorm";
import { RegexTitleValidator } from "@infra/validators/titleValidator/regexTitleValidator";

const typeormEventRepository = new TypeormEventRepository();
const titleValidator = new RegexTitleValidator();

const createEvent = new CreateEvent(typeormEventRepository, titleValidator);

const router = Router();

router.post("/create-event", async (req: Request, res: Response) => {
  const { title, description, region } = req.body;
  try {
    const event = await createEvent.execute({ title, description, region });
    res.status(201).send(`Event created with title: ${event.title}`);
  } catch (err) {
    if (
      err instanceof MissingParam ||
      err instanceof InvalidTitleError
    ) {
      res.status(400).send(err.message);
    } else {
      res.status(500).send("Internal server error");
    }
  }
});

export default router;
