export default interface Enemy {
    get baseHealth(): number,
    get baseDamage(): number,
    get weapon(): string,
    get velocity(): number
}