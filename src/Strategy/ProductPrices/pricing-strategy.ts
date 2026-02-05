export default interface PricingStrategy {
    calculate(basePrice: number): number
}