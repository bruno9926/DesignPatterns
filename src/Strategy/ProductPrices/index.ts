import PriceCalculator from "./price-calculator";
import { NormalPricing, SeasonDiscountPricing, VIPPricing } from "./pricing-strategies";
import PricingStrategy from "./pricing-strategy";

// select a strategy
const normalPricing: PricingStrategy = new NormalPricing();
const seasonDiscount: PricingStrategy = new SeasonDiscountPricing();
const vip: PricingStrategy = new VIPPricing(true);

// instantiate price calculator
const priceCalculator: PriceCalculator = new PriceCalculator(normalPricing);

// calculate price
const basePrice = 100;
console.log("Base price: ", basePrice);

console.log("Normal price: ", priceCalculator.calculate(basePrice));

priceCalculator.setStrategy(seasonDiscount);
console.log("Season discount price: ", priceCalculator.calculate(basePrice));

priceCalculator.setStrategy(vip);
console.log("VIP price: ", priceCalculator.calculate(basePrice));
