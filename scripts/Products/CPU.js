// CPU Class
import { Product } from "./product.js";

class CPU extends Product {
  constructor(
    name,
    BrandName,
    ModelName,
    Price,
    Cores,
    Threads,
    CoreClock,
    BoostClock,
    TDP
  ) {
    super(name, "CPU", BrandName, ModelName, Price);
    this._Cores = Cores;
    this._Threads = Threads;
    this._CoreClock = CoreClock;
    this._BoostClock = BoostClock;
    this._TDP = TDP;
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
  get TDP() {
    return this._TDP;
  }
  set TDP(value) {
    this._TDP = value;
  }
}

export { CPU };
