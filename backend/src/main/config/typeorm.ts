import "reflect-metadata";
import { TypeormEvent } from "@infra/repositories/eventRepository/typeorm";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456789",
  database: "cleanarch",
  synchronize: true,
  logging: true,
  entities: [TypeormEvent],
  subscribers: [],
  migrations: [],
});

export const configTypeorm = async () => {
  await dataSource.initialize();
};
