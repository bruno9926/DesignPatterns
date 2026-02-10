import Subscriber from "./Subscriber";
import { EVENT_TYPE, Event } from "./eventTypes";

export class AchievementSystem implements Subscriber {
    update(event: Event): void {
        switch (event.type) {
            case EVENT_TYPE.PLAYER_LEVELED_UP:
                console.log("Player leveled up! Unlocking new achievements...");
                break;
            case EVENT_TYPE.ENEMY_DEFEATED:
                console.log(`${event.payload?.enemy} defeated! Checking for combat achievements...`);
                break;
        }
    }
}

export class AudioSystem implements Subscriber {
    update(event: Event): void {
        switch (event.type) {
            case EVENT_TYPE.PLAYER_LEVELED_UP:
                console.log("FANFARE SOUND");
                break;
        }
    }
}

export class Stats implements Subscriber {

    stats ={
        playerLevel: 1,
        enemiesDefeated: 0,
        deaths: 0,
        itemsCollected: 0,
        dificultLevel: "Easy"
    }

    update(event: Event): void {
        switch (event.type) {
            case EVENT_TYPE.PLAYER_LEVELED_UP:
                this.stats.playerLevel += 1;
                break;
            case EVENT_TYPE.ENEMY_DEFEATED:
                this.stats.enemiesDefeated += 1;
                break;
            case EVENT_TYPE.ITEM_COLLECTED:
                this.stats.itemsCollected += 1;
                break;
        }
        console.log("Updating player stats...", this.stats);
    }
}

export class UI implements Subscriber {
    update(event: Event): void {
        switch (event.type) {
            case EVENT_TYPE.PLAYER_LEVELED_UP:
                console.log(`Player leveled up to level ${event.payload?.level}`);
                break;
            case EVENT_TYPE.ITEM_COLLECTED:
                console.log(`You found item: ${event.payload?.item}`);
                break;
        }
    }
}