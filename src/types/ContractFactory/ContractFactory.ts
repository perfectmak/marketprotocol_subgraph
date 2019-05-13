import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MarketContractCreated extends EthereumEvent {
  get params(): MarketContractCreated__Params {
    return new MarketContractCreated__Params(this);
  }
}

export class MarketContractCreated__Params {
  _event: MarketContractCreated;

  constructor(event: MarketContractCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get contractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ContractFactory extends SmartContract {
  static bind(address: Address): ContractFactory {
    return new ContractFactory("ContractFactory", address);
  }

  oracleHub(): Address {
    let result = super.call("oracleHub", []);
    return result[0].toAddress();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);
    return result[0].toBoolean();
  }

  MARKET_COLLATERAL_POOL(): Address {
    let result = super.call("MARKET_COLLATERAL_POOL", []);
    return result[0].toAddress();
  }

  marketContractRegistry(): Address {
    let result = super.call("marketContractRegistry", []);
    return result[0].toAddress();
  }
}

export class RenounceOwnershipCall extends EthereumCall {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get registryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get collateralPoolAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get oracleHubAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeployMarketContractMPXCall extends EthereumCall {
  get inputs(): DeployMarketContractMPXCall__Inputs {
    return new DeployMarketContractMPXCall__Inputs(this);
  }

  get outputs(): DeployMarketContractMPXCall__Outputs {
    return new DeployMarketContractMPXCall__Outputs(this);
  }
}

export class DeployMarketContractMPXCall__Inputs {
  _call: DeployMarketContractMPXCall;

  constructor(call: DeployMarketContractMPXCall) {
    this._call = call;
  }

  get contractNames(): string {
    return this._call.inputValues[0].value.toString();
  }

  get collateralTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get contractSpecs(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get oracleURL(): string {
    return this._call.inputValues[3].value.toString();
  }

  get oracleStatistic(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class DeployMarketContractMPXCall__Outputs {
  _call: DeployMarketContractMPXCall;

  constructor(call: DeployMarketContractMPXCall) {
    this._call = call;
  }
}

export class SetRegistryAddressCall extends EthereumCall {
  get inputs(): SetRegistryAddressCall__Inputs {
    return new SetRegistryAddressCall__Inputs(this);
  }

  get outputs(): SetRegistryAddressCall__Outputs {
    return new SetRegistryAddressCall__Outputs(this);
  }
}

export class SetRegistryAddressCall__Inputs {
  _call: SetRegistryAddressCall;

  constructor(call: SetRegistryAddressCall) {
    this._call = call;
  }

  get registryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRegistryAddressCall__Outputs {
  _call: SetRegistryAddressCall;

  constructor(call: SetRegistryAddressCall) {
    this._call = call;
  }
}

export class SetOracleHubAddressCall extends EthereumCall {
  get inputs(): SetOracleHubAddressCall__Inputs {
    return new SetOracleHubAddressCall__Inputs(this);
  }

  get outputs(): SetOracleHubAddressCall__Outputs {
    return new SetOracleHubAddressCall__Outputs(this);
  }
}

export class SetOracleHubAddressCall__Inputs {
  _call: SetOracleHubAddressCall;

  constructor(call: SetOracleHubAddressCall) {
    this._call = call;
  }

  get oracleHubAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOracleHubAddressCall__Outputs {
  _call: SetOracleHubAddressCall;

  constructor(call: SetOracleHubAddressCall) {
    this._call = call;
  }
}
