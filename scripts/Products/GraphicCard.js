// CPU Class
import { Product } from "./product.js";

class GraphicCard extends Product {
  constructor(
    name,
    BrandName,
    ModelName,
    Price,
    Cores,
    Threads,
    CoreClock,
    BoostClock,
    Chipset,
    Memory,
    Color,
    Length
  ) {
    super(name, "Graphic Card", BrandName, ModelName, Price);
    this._Cores = Cores;
    this._Threads = Threads;
    this._CoreClock = CoreClock;
    this._BoostClock = BoostClock;
    this._Chipset = Chipset;
    this._Memory = Memory;
    this._Color = Color;
    this._Length = Length;
  }
  
  get Cores() {
    return this._Cores;
  }
  set Cores(value) {
    this._Cores = value;
  }
  get Threads() {
    return this._Threads;
  }
  set Threads(value) {
    this._Threads = value;
  }
  get CoreClock() {
    return this._CoreClock;
  }
  set CoreClock(value) {
    this._CoreClock = value;
  }
  get BoostClock() {
    return this._BoostClock;
  }
  set BoostClock(value) {
    this._BoostClock = value;
  }
  get Chipset() {
    return this._Chipset;
  }
  set Chipset(value) {
    this._Chipset = value;
  }
  get Memory() {
    return this._Memory;
  }
  set Memory(value) {
    this._Memory = value;
  }
  get Color() {
    return this._Color;
  }
  set Color(value) {
    this._Color = value;
  }
  get Length() {
    return this._Length;
  }
  set Length(value) {
    this._Length = value;
  }
}

export { GraphicCard };
