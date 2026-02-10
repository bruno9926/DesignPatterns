import { Event } from "./eventTypes";

export default interface Subscriber {
    update(event: Event): void;
}