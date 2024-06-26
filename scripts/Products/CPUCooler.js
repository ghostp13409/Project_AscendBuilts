// CPU Class
import { Product } from "./product.js";

class CPUCooler extends Product {
  constructor(
    name,
    BrandName,
    ModelName,
    Price,
    FanRMP,
    NoiseLevel,
    Color,
    RadiatorSize
  ) {
    super(name, "CPU Cooler", BrandName, ModelName, Price);
    this._FanRMP = FanRMP;
    this._NoiseLevel = NoiseLevel;
    this._Color = Color;
    this._RadiatorSize = RadiatorSize
  }
  get FanRMP() {
    return this._FanRMP;
  }
  set FanRMP(value) {
    this._FanRMP = value;
  }
  get NoiseLevel() {
    return this._NoiseLevel;
  }
  set NoiseLevel(value) {
    this._NoiseLevel = value;
  }
  get Color() {
    return this._Color;
  }
  set Color(value) {
    this._Color = value;
  }
  get RadiatorSize() {
    return this._RadiatorSize;
  }
  set RadiatorSize(value) {
    this._RadiatorSize = value;
  }
}

export { CPUCooler };
