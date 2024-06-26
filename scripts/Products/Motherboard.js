// Memory Class
import { Product } from "./product.js";

class Motherboard extends Product {
  constructor(
    name,
    BrandName,
    ModelName,
    Price,
    Socket,
    FormFactor,
    MemoryMax,
    MemorySlots,
    Color
  ) {
    super(name, "Motherboard", BrandName, ModelName, Price);
    this._Socket = Socket;
    this._FormFactor = FormFactor;
    this._MemoryMax = MemoryMax;
    this._MemorySlots = MemorySlots;
    this._Color = Color;
  }
  
  get Socket() {
    return this._Socket;
  }
  set Socket(value) {
    this._Socket = value;
  }
  get FormFactor() {
    return this._FormFactor;
  }
  set FormFactor(value) {
    this._FormFactor = value;
  }
  get MemoryMax() {
    return this._MemoryMax;
  }
  set MemoryMax(value) {
    this._MemoryMax = value;
  }
  get MemorySlots() {
    return this._MemorySlots;
  }
  set MemorySlots(value) {
    this._MemorySlots = value;
  }
  get Color() {
    return this._Color;
  }
  set Color(value) {
    this._Color = value;
  }
}

export { Motherboard };
