import { PubSub } from '@google-cloud/pubsub';

const googlePubSub = new PubSub();

export class GooglePubSub {
  constructor(public pubsub: PubSub) {
    this.pubsub = pubsub;
  }

  async createTopic(name: string) {
    await this.pubsub.createTopic(name);
  }

  async publishMessage(topicName: string, data: string) {
    const dataBuffer = Buffer.from(data);

    await this.pubsub
      .topic(topicName)
      .publish(dataBuffer)
      .then((messageId) => {
        console.log(`message ${messageId} was published`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const publisher = new GooglePubSub(googlePubSub);

export { publisher };
