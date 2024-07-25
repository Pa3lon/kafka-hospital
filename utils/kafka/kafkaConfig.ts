import { Kafka } from "kafkajs";
import fs from "fs";

export default function kafkaConfig() {
  return new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9094"],
    ssl: {
      rejectUnauthorized: false,
      ca: fs.readFileSync("certs/CA_lokalmaskin.crt", "utf-8"),
      key: fs.readFileSync("certs/admin.lokalmaskin.key", "utf-8"),
      cert: fs.readFileSync("certs/admin.lokalmaskin.crt", "utf-8"),
    },
  });
}
