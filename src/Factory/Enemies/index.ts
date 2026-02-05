import Enemy from "./Enemy";
import { ArcherFactory, BossFactory, EnemyFactory, MageFactory, SoldierFactory } from "./EnemyFactory";
import { ENEMY_TYPES } from "./EnemyTypes";

function getEnemyFactory(type: ENEMY_TYPES): EnemyFactory {
    switch(type) {
        case ENEMY_TYPES.SOLDIER: {
            return new SoldierFactory();
        }
        case ENEMY_TYPES.ARCHER: {
            return new ArcherFactory();
        }
        case ENEMY_TYPES.MAGE: {
            return new MageFactory();
        }
        case ENEMY_TYPES.BOSS: {
            return new BossFactory();
        }
        default: {
            throw new Error("Unsupported enemy type")
        }
    }
}

function displayEnemy(enemy: Enemy) {
    console.log(enemy.baseHealth);
    console.log(enemy.baseDamage);
    console.log(enemy.weapon);
    console.log(enemy.velocity);
}

console.log('creating soldier enemy: ')
let factory = getEnemyFactory(ENEMY_TYPES.SOLDIER);
displayEnemy(factory.createEnemy());

console.log('creating archer enemy: ')
factory = getEnemyFactory(ENEMY_TYPES.ARCHER);
displayEnemy(factory.createEnemy());

console.log('creating mage enemy: ')
factory = getEnemyFactory(ENEMY_TYPES.MAGE);
displayEnemy(factory.createEnemy());

console.log('creating Boss enemy: ')
factory = getEnemyFactory(ENEMY_TYPES.BOSS);
displayEnemy(factory.createEnemy());