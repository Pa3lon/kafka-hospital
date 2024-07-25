import kafkaConfig from "./kafkaConfig";
import { Message } from "kafkajs";

export default async function producer(topic: string, message: Message) {
  const kafka = kafkaConfig();
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic,
    messages: [message],
  });
}
