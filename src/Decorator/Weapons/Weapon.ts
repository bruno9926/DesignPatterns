export default interface Weapon {
    getDescription(): string;
    getDamage(): number;
    getDurability(): number;
    getAttackSpeed(): number;
}