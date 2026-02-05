import PricingStrategy from "./pricing-strategy";

export class NormalPricing implements PricingStrategy {
    calculate(basePrice: number): number {
        return basePrice;
    }
}

export class SeasonDiscountPricing implements PricingStrategy {
    calculate(basePrice: number): number {
        // 20% off
        return Math.max(0, basePrice * 0.8);
    }
}

export class VIPPricing implements PricingStrategy {
    constructor(public isVIPClient: boolean) {}

    calculate(basePrice: number): number {
        // 30% off only for VIP clients
        return this.isVIPClient ? basePrice * 0.7 : basePrice
    }
}