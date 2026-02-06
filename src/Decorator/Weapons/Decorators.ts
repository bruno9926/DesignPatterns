import Weapon from "./Weapon";

export class BaseDecorator implements Weapon {
    constructor(protected weapon: Weapon) {}

    getDescription(): string {
        return this.weapon.getDescription();
    }
    getDamage(): number {
        return this.weapon.getDamage();
    }
    getDurability(): number {
        return this.weapon.getDurability();
    }
    getAttackSpeed(): number {
        return this.weapon.getAttackSpeed();
    }
}

export class FireEnchantment extends BaseDecorator {
    getDescription(): string {
        return `${this.weapon.getDescription()}\nEnchanted with fire, adding burning damage.`;
    }
    getDamage(): number {
        return this.weapon.getDamage() + 5; // Adds 5 fire damage
    }
}

export class IceEnchantment extends BaseDecorator {
    getDescription(): string {
        return `${this.weapon.getDescription()}\nEnchanted with ice, adding freezing damage.`;
    }
    getDamage(): number {
        return this.weapon.getDamage() + 3; // Adds 3 ice damage
    }
}

export class PoisonEnchantment extends BaseDecorator {
    getDescription(): string {
        return `${this.weapon.getDescription()}\nEnchanted with poison, adding toxic damage.`;
    }
    getDamage(): number {
        return this.weapon.getDamage() + 4; // Adds 4 poison damage
    }
}

export class FeatherlightCoating extends BaseDecorator {
    getDescription(): string {
        return `${this.weapon.getDescription()}\nCoated with featherlight material, increasing attack speed.`;
    }
    getAttackSpeed(): number {
        return this.weapon.getAttackSpeed() + 1; // Increases attack speed by 1
    }
    getDurability(): number {
        return Math.max(1, this.weapon.getDurability() - 20); // Decreases durability by 20, but not below 1
    }
}

export class DiamondCoating extends BaseDecorator {
    getDescription(): string {
        return `${this.weapon.getDescription()}\nCoated with diamond, increasing durability, but reducing attack speed.`;
    }
    getDurability(): number {
        return this.weapon.getDurability() + 50; // Increases durability by 50
    }
    getAttackSpeed(): number {
        return Math.max(0.1, this.weapon.getAttackSpeed() - 0.5); // Decreases attack speed by 0.5, but not below 0.1
    }
}