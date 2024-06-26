// Memory Class
import { Product } from "./product.js";

class Memory extends Product {
  constructor(
    name,
    BrandName,
    ModelName,
    Price,
    Speed,
    Modules,
    PricePerGB,
    Color,
    FirstWordLatency
  ) {
    super(name, "Memory", BrandName, ModelName, Price);
    this._Speed = Speed;
    this._Modules = Modules;
    this._PricePerGB = PricePerGB;
    this._Color = Color;
    this._FirstWordLatency = FirstWordLatency;
  }
  
  get Speed() {
    return this._Speed;
  }
  set Speed(value) {
    this._Speed = value;
  }
  get Modules() {
    return this._Modules;
  }
  set Modules(value) {
    this._Modules = value;
  }
  get PricePerGB() {
    return this._PricePerGB;
  }
  set PricePerGB(value) {
    this._PricePerGB = value;
  }
  get Color() {
    return this._Color;
  }
  set Color(value) {
    this._Color = value;
  }
  get FirstWordLatency() {
    return this._FirstWordLatency;
  }
  set FirstWordLatency(value) {
    this._FirstWordLatency = value;
  }
}

export { Memory };
