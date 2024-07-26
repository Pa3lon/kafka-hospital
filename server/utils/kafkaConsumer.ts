import kafkaConfig from "./kafkaConfig";

const config = kafkaConfig();

export default class KafkaConsumer {
  private topic: string;
  private group: string;
  private subscribers: any[];
  private fromBeginning: boolean;
  private connection: any;

  constructor(
    topic: string,
    group: string,
    subscribers: any[],
    fromBeginning? = true
  ) {
    this.topic = topic;
    this.group = group;
    this.subscribers = subscribers;
    this.fromBeginning = fromBeginning;
  }

  async connect() {
    this.connection = config.consumer({ groupId: this.group });
    this.connection.connect();
    this.connection.subscribe({
      topic: this.topic,
      fromBeginning: this.fromBeginning,
    });
  }

  async start() {
    this.connection.run({
      eachMessage: async ({ topic, partition, message }) => {
        const kafkaMessage = {
          partition,
          offset: message.offset,
          value: message.value.toString(),
        };
        console.log(kafkaMessage);
        this.subscribers.forEach((subscriber) => subscriber.send(kafkaMessage));
      },
    });
  }

  async disconnect() {
    await this.connection.disconnect();
  }
}
