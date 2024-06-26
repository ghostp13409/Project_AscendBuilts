// CPU Class
import { Product } from "./product.js";

class PowerSupply extends Product {
  constructor(
    name,
    BrandName,
    ModelName,
    Price,
    PowerSupplyType,
    EfficiencyRating,
    Wattage,
    Modular,
    Color
  ) {
    super(name, "Power Supply", BrandName, ModelName, Price);
    this._PowerSupplyType = PowerSupplyType;
    this._EfficiencyRating = EfficiencyRating;
    this._Wattage = Wattage;
    this._Modular = Modular;
    this._Color = Color;
  }
  
  get PowerSupplyType() {
    return this._PowerSupplyType;
  }
  set PowerSupplyType(value) {
    this._PowerSupplyType = value;
  }
  get EfficiencyRating() {
    return this._EfficiencyRating;
  }
  set EfficiencyRating(value) {
    this._EfficiencyRating = value;
  }
  get Wattage() {
    return this._Wattage;
  }
  set Wattage(value) {
    this._Wattage = value;
  }
  get Modular() {
    return this._Modular;
  }
  set Modular(value) {
    this._Modular = value;
  }
  get Color() {
    return this._Color;
  }
  set Color(value) {
    this._Color = value;
  }
}

export { PowerSupply };
