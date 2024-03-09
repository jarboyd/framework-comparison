import { GetEventsByRegion, MissingParam } from "@domain/useCases/getEventsByRegion";
import { TypeormEventRepository } from "@infra/repositories/eventRepository/typeorm";
import { Request, Response, Router } from "express";

const typeormEventRepository = new TypeormEventRepository();

const getEventsByRegion = new GetEventsByRegion(typeormEventRepository);

const router = Router();

router.get("/events/:region", async (req: Request, res: Response) => {
  const { region } = req.params;
  try {
    const events = await getEventsByRegion.execute({ region });
    res.status(200).json(events);
  } catch (err) {
    if (
      err instanceof MissingParam
    ) {
      res.status(400).send(err.message);
    } else {
      res.status(500).send("Internal server error");
    }
  }
});

export default router;
