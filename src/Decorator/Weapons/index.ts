import Weapon from "./Weapon";
import { Sword, Claymore, Bow, Dagger } from "./Weapons";
import { FireEnchantment, IceEnchantment, PoisonEnchantment, FeatherlightCoating, DiamondCoating } from "./Decorators";

function printWeaponStats(weapon: Weapon) {
    console.log("Weapon Description:", weapon.getDescription());
    console.log("Damage:", weapon.getDamage());
    console.log("Durability:", weapon.getDurability());
    console.log("Attack Speed:", weapon.getAttackSpeed());
    console.log("---------------------------");
}

// create a sword
let sword: Weapon = new Sword();
printWeaponStats(sword);

// decorate the weapon with fire enchantment
sword = new FireEnchantment(sword);
printWeaponStats(sword);

let bow: Weapon = new Bow();
printWeaponStats(bow);

// decorate the bow with ice enchantment and featherlight coating
bow = new IceEnchantment(bow);
bow = new DiamondCoating(bow);
printWeaponStats(bow);

let claymore: Weapon = new Claymore();
printWeaponStats(claymore);

// decorate the claymore with poison enchantment and featherlight coating
claymore = new PoisonEnchantment(claymore);
claymore = new FeatherlightCoating(claymore);
printWeaponStats(claymore);