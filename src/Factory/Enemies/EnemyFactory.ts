import { Archer, Boss, Mage, Soldier } from "./Enemies";
import Enemy from "./Enemy";

export abstract class EnemyFactory {
    abstract createEnemy(): Enemy;
}

export class SoldierFactory extends EnemyFactory {
    createEnemy(): Enemy {
        return new Soldier();
    }
}

export class ArcherFactory extends EnemyFactory {
    createEnemy(): Enemy {
        return new Archer();
    }
}

export class MageFactory extends EnemyFactory {
    createEnemy(): Enemy {
        return new Mage();
    }
}

export class BossFactory extends EnemyFactory {
    createEnemy(): Enemy {
        return new Boss();
    }
}