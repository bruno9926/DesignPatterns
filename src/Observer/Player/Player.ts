import Subscriber from "./Subscriber";
import { Event, EVENT_TYPE } from "./eventTypes";

abstract class Publisher {
    subscribers: Subscriber[] = [];

    addSubscriber(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
    }

    removeSubscriber(subscriber: Subscriber) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }

    notifySubscribers(event: Event) {
        this.subscribers.forEach(subscriber => subscriber.update(event));
    }
}

export default class Player extends Publisher {
    playerState: {
        level: number;
        experience: number;
        items: string[];
    } = {
        level: 1,
        experience: 0,
        items: []
    }

    levelUp() {
        console.log("------------------------------");
        console.log("Player leveled up!");
        this.playerState.level += 1;
        this.notifySubscribers({type: EVENT_TYPE.PLAYER_LEVELED_UP, payload: { level: this.playerState.level }});
    }

    defeatEnemy(enemy: string) {
        console.log("------------------------------");
        console.log("Enemy defeated!");
        this.playerState.experience += 100;
        this.notifySubscribers({type: EVENT_TYPE.ENEMY_DEFEATED, payload: { enemy: enemy }});
    }

    pickUpItem(item: string) {
        console.log("------------------------------");
        console.log(`Picked up item: ${item}`);
        this.playerState.items.push(item);
        this.notifySubscribers({type: EVENT_TYPE.ITEM_COLLECTED, payload: { item: item }});
    }
}