import "reflect-metadata";

import express from "express";
import config from "@main/config";

import createEventRouter from "@main/rest/endpoints/createEvent";
import getAllEventsRouter from "@main/rest/endpoints/getAllEvents";
import getEventsByRegionRouter from "@main/rest/endpoints/getEventsByRegion";

const main = async () => {
  await config();

  const port = 8080;
  
  const app = express();

  app.use(express.json());

  app.use(createEventRouter);
  app.use(getAllEventsRouter);
  app.use(getEventsByRegionRouter);

  app.listen(port, () => {
    console.log(`RESTful server running on port: ${port}`);
  });
};

main();
