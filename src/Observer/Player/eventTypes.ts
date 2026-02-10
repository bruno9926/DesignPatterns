export enum EVENT_TYPE {
    PLAYER_LEVELED_UP,
    ENEMY_DEFEATED,
    ITEM_COLLECTED
}

export type Event = {
    type: EVENT_TYPE;
    payload?: { [key: string]: any };
}