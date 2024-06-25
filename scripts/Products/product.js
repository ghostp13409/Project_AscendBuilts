// Classes for All the Products

// Main Product Class

class Product {
  constructor(name, type, BrandName, ModelName, Price) {
    this._name = name;
    this._type = type;
    this._BrandName = BrandName;
    this._ModelName = ModelName;
    this._Price = Price;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value;
  }
  get BrandName() {
    return this._BrandName;
  }
  set BrandName(value) {
    this._BrandName = value;
  }
  get ModelName() {
    return this._ModelName;
  }
  set ModelName(value) {
    this._ModelName = value;
  }
  get Price() {
    return this._Price;
  }
  set Price(value) {
    this._Price = value;
  }
}

export { Product };
