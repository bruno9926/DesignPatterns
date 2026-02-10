import Player from "./Player";
import { Stats, UI, AudioSystem, AchievementSystem } from "./Subscribers";

// creating a player
 const player: Player = new Player();

// creating subscribers
const stats = new Stats();
const ui = new UI();
const audioSystem = new AudioSystem();
const achievementSystem = new AchievementSystem();

// registering subscribers
player.addSubscriber(stats);
player.addSubscriber(ui);
player.addSubscriber(audioSystem);
player.addSubscriber(achievementSystem);

// dispatching events
player.levelUp();
player.defeatEnemy("Dragon");
player.pickUpItem("Sword of Destiny");