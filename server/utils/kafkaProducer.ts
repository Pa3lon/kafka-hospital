import { Message, Partitioners } from "kafkajs";

const kafka = kafkaConfig();
const prod = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
});

export default async function (topic: string, message: Message) {
  await prod.connect();

  await prod.send({
    topic,
    messages: [message],
  });
}
