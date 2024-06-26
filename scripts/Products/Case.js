// CPU Class
import { Product } from "./product.js";

class Case extends Product {
  constructor(
    name,
    BrandName,
    ModelName,
    Price,
    CaseType,
    SidePanel,
    ExternalVolume,
    Internal35Bays
  ) {
    super(name, "Case", BrandName, ModelName, Price);
    this._CaseType = CaseType;
    this._SidePanel = SidePanel;
    this._ExternalVolume = ExternalVolume;
    this._Internal35Bays = Internal35Bays;
  }

  get CaseType() {
    return this._CaseType;
  }
  set CaseType(value) {
    this._CaseType = value;
  }
  get SidePanel() {
    return this._SidePanel;
  }
  set SidePanel(value) {
    this._SidePanel = value;
  }
  get ExternalVolume() {
    return this._ExternalVolume;
  }
  set ExternalVolume(value) {
    this._ExternalVolume = value;
  }
  get Internal35Bays() {
    return this._Internal35Bays;
  }
  set Internal35Bays(value) {
    this._Internal35Bays = value;
  }
}

export { Case };
