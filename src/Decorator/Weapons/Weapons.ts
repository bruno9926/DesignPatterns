import Weapon from "./Weapon";

export class Sword implements Weapon {
    getDescription(): string {
        return "Basic Sword, light and easy to handle.";
    }
    getDamage(): number {
        return 10;
    }
    getDurability(): number {
        return 100;
    }
    getAttackSpeed(): number {
        return 1.5; // Swords have a faster attack speed
    }
}

export class Claymore implements Weapon {
    getDescription(): string {
        return "Heavy Claymore, powerful but slow.";
    }
    getDamage(): number {
        return 15;
    }
    getDurability(): number {
        return 80;
    }
    getAttackSpeed(): number {
        return 0.8; // Claymores have a slower attack speed
    }
}

export class Bow implements Weapon {
    getDescription(): string {
        return "Long Bow, great for ranged attacks.";
    }
    getDamage(): number {
        return 4;
    }
    getDurability(): number {
        return 60;
    }
    getAttackSpeed(): number {
        return 2.0; // Bows have a faster attack speed
    }
}

export class Dagger implements Weapon {
    getDescription(): string {
        return "Sharp Dagger, perfect for quick strikes.";
    }
    getDamage(): number {
        return 6;
    }
    getDurability(): number {
        return 40;
    }
    getAttackSpeed(): number {
        return 2.5; // Daggers have a faster attack speed
    }
}