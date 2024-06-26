// Storage Class
import { Product } from "./product.js";

class Storage extends Product {
  constructor(
    name,
    BrandName,
    ModelName,
    Price,
    PricePerGB,
    StorageType,
    Cache,
    FormFactor,
    Interface
  ) {
    super(name, "Storage", BrandName, ModelName, Price);
    this._PricePerGB = PricePerGB;
    this._StorageType = StorageType;
    this._Cache = Cache;
    this._FormFactor = FormFactor;
    this._Interface = Interface;
  }

  get PricePerGB() {
    return this._PricePerGB;
  }
  set PricePerGB(value) {
    this._PricePerGB = value;
  }
  get StorageType() {
    return this._StorageType;
  }
  set StorageType(value) {
    this._StorageType = value;
  }
  get Cache() {
    return this._Cache;
  }
  set Cache(value) {
    this._Cache = value;
  }
  get FormFactor() {
    return this._FormFactor;
  }
  set FormFactor(value) {
    this._FormFactor = value;
  }
  get Interface() {
    return this._Interface;
  }
  set Interface(value) {
    this._Interface = value;
  }
}

export { Storage };
