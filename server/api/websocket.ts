import KafkaConsumer from "@/server/utils/kafkaConsumer";
import TopicGroups from "@/const/TopicGroups";

let topicGroups = TopicGroups;

export default defineWebSocketHandler({
  async message(peer, message) {
    const topic = message.text();
    const topicGroup = TopicGroups.find((group) => group.name === topic);
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

    topicGroups = TopicGroups.map((group) =>
      group.name === topic ? topicGroup : group
    );
  },

  error(peer, error) {
    console.log("error", peer.id, error);
  },
});
