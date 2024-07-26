import KafkaConsumer from "@/server/utils/kafkaConsumer";

let topicGroups = [
  {
    name: "hospital.patients-waiting",
    consumer: null,
  },
];

export default defineWebSocketHandler({
  open(peer) {
    console.log("open", peer.id);
  },
  close(peer) {
    console.log("close", peer.id);
  },
  error(peer, error) {
    console.log("error", peer.id, error);
  },
  async message(peer, message) {
    const topic = message.text();
    const topicGroup = topicGroups.find((group) => group.name === topic);
    if (!topicGroup) return;
    if (topicGroup.consumer) {
      console.log("Adding subscriber to existing consumer");
      topicGroup.consumer.subscribers = [
        ...topicGroup.consumer.subscribers,
        peer,
      ];
    } else {
      console.log("Creating new consumer");
      const consumer = new KafkaConsumer(topic, topic, [peer]);
      consumer.connect();
      consumer.start();
      topicGroup.consumer = consumer;
    }
    topicGroups = topicGroups.map((group) =>
      group.name === topic ? topicGroup : group
    );
  },
});
