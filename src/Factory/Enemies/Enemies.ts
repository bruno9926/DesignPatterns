import Enemy from "./Enemy";

export class Soldier implements Enemy {
    private _baseHealth = 100;
    private _baseDamage = 20;
    private _weapon = 'Sword';
    private _velocity = 10;

    get baseHealth(): number {
        return this._baseHealth
    }

    get baseDamage(): number {
        return this._baseDamage
    }

    get weapon(): string {
        return this._weapon
    }

    get velocity(): number {
        return this._velocity
    }
}

export class Archer implements Enemy {
    private _baseHealth = 70;
    private _baseDamage = 15;
    private _weapon = 'Bow and arrows';
    private _velocity = 20;

    get baseHealth(): number {
        return this._baseHealth
    }

    get baseDamage(): number {
        return this._baseDamage
    }

    get weapon(): string {
        return this._weapon
    }

    get velocity(): number {
        return this._velocity
    }
}

export class Mage implements Enemy {
    private _baseHealth = 60;
    private _baseDamage = 30;
    private _weapon = 'Scepter';
    private _velocity = 20;

    get baseHealth(): number {
        return this._baseHealth
    }

    get baseDamage(): number {
        return this._baseDamage
    }

    get weapon(): string {
        return this._weapon
    }

    get velocity(): number {
        return this._velocity
    }
}

export class Boss implements Enemy {
    private _baseHealth = 1500;
    private _baseDamage = 50;
    private _weapon = 'Axe';
    private _velocity = 10;

    get baseHealth(): number {
        return this._baseHealth
    }

    get baseDamage(): number {
        return this._baseDamage
    }

    get weapon(): string {
        return this._weapon
    }

    get velocity(): number {
        return this._velocity
    }
}