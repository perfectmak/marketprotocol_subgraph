import { Address, DataSourceTemplate } from "@graphprotocol/graph-ts";

export class MarketContract extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("MarketContract", [address.toHex()]);
  }
}

export class PositionToken extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("PositionToken", [address.toHex()]);
  }
}
