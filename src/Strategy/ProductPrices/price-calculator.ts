import PricingStrategy from "./pricing-strategy";

export default class PriceCalculator {
    constructor(
        private strategy: PricingStrategy
    ){}

    setStrategy(strategy: PricingStrategy) {
        this.strategy = strategy;
    }

    calculate(basePrice: number): number {
        return this.strategy.calculate(basePrice);
    }
}